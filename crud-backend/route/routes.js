var express = require('express');
var router = express.Router();

const item = require('../model/shoppingItem');

//retreiving the all data
router.get('/items', (req, res, next)=> {
    item.find(function(err, items) {
        if(err) {
            res.json(err);
        } else {
            res.json(items);
        }
    });
});

//creating/Inserting the items
router.post('/additems', (req, res, next)=> {
    let newShoppingItem = new item({ 
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        itemBought: req.body.itemBought
    });
    //save new Item here
    newShoppingItem.save( (err, item)=> {
        if(err) {
            res.json(err);
        } else {
            res.json({message: 'Item has been added successfully!!'});
        }
    });
});

//Updating the data
router.put('/item/:id', (req, res, next)=> {
    item.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            itemName: req.body.itemName,
            itemQuantity: req.body.itemQuantity,
            itemBought: req.body.itemBought
        }
    }, 
function(err, item) {
    if(err) {
        res.json(err);
    } else {
        res.json({message: "record updated successfully!!"});
    }
}
)
});

//Delete any item form database
router.delete('/item/:id', (req, res, next)=> {
    item.remove({_id: req.params.id}, function(err, item) {
        if(err) {
            res.json(err);
        } else {
            res.json("item deleted with id: " + req.params.id);
        }
    })
})
module.exports = router;