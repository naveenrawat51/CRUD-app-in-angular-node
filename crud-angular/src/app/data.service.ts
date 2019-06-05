import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Item } from './item';

@Injectable()
export class DataService { 


  constructor(private httpClient: HttpClient) { }
  // to get the list of items from database (use get method)
  getShoppingItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>('http://localhost:3000/api/items');
  }
  // to add a new item in database (use post method)
  addShoppingItem(newItem: Item) {
    return this.httpClient.post('http://localhost:3000/api/additems', newItem);
  }
  // to delete selected item
  deleteShoppingItem(id) {
    return this.httpClient.delete('http://localhost:3000/api/item/' + id);
  }
  // to update any item
  updateShoppingItem(newItem: Item) {
  return this.httpClient.put('http://localhost:3000/api/item/' + newItem._id, newItem);
  }
}
