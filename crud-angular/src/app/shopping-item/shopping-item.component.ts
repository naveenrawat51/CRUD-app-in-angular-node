import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { DataService } from '../data.service';
import { NgForm, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
})
export class ShoppingItemComponent implements OnInit {
// to store database values
shoppingItemList: Item[] = [];
selectedItem: Item;
toggleForm: boolean = false;
FirstName: string = "";
// Dependency Injection
  constructor( private dataService: DataService) { }


  // to store items in shoppingItemList array
getItems() {
  this.dataService.getShoppingItems()
  .subscribe(items => { this.shoppingItemList = items;
  // console.log('data from dataservice ' + this.shoppingItemList[0].itemName);
 });
}
// Add item in the database
addItem(form) {
 // console.log(form.value);
 const newItem: Item = {
   itemName: form.value.itemName,
   itemQuantity: form.value.itemQuantity,
   itemBought: false
 };
 this.dataService.addShoppingItem(newItem)
 .subscribe(item => {
   console.log(item);
   this.getItems();

   });
}

// Delete the item
deleteItem(id) {
  this.dataService.deleteShoppingItem(id)
  .subscribe(data => {
    console.log(data);
    this.getItems();
    
    }
  );
}
// to show the edit form when someone clicks on edit button
showEditForm(item) {
this.selectedItem = item;
this.toggleForm = !this.toggleForm;
}

// update the records in database
editItem(editForm) {
  const newItem: Item = {
    _id: this.selectedItem._id,
    itemName: editForm.value.itemName,
    itemQuantity: editForm.value.itemQuantity,
    itemBought: this.selectedItem.itemBought
  };
  this.dataService.updateShoppingItem(newItem)
  .subscribe(item => {
    console.log(item);
    this.getItems();
    this.toggleForm = !this.toggleForm;
});
}
// Reset the form

  ngOnInit() {
    this.getItems();
  }

}
