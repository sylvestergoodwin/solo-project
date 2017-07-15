// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Item schema
var ItemDetail = require("./server/db/mongodb/models/Item");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------
// MongoDB Configuration configuration
// development database
mongoose.connect("mongodb://localhost/soloproject");

// production database
//mongoose.connect("mongodb://soloproject:soloproject@ds151202.mlab.com:51202/soloproject")
var mongodb = mongoose.connection;

mongodb.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

mongodb.once("open", function() {
  console.log("Mongoose connection successful.");
  console.log("----------------------------------------------------------------.");
});


// MySQL configuration
// Requiring our model
var mysqldb = require("./server/db/mysql/models");

// Syncing our sequelize models and then starting our express app
mysqldb.sequelize.sync({ force: false })
	.then(function() {
		console.log("mysql Connection Successfull");
    console.log("----------------------------------------------------------------.");
	})
	.catch(function (){
		console.log("mysql Connection failed")
	});

// -------------------------------------------------
// Address Route
app.put("/api/address", function(req, res) {
  // console.log("put api/address")
  // console.log(req.body)

  mysqldb.Address.update({
    user_id: req.body.user_id,
    street: req.body.street,
    pobox: req.body.pobox,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    country: req.body.country},
    {where: {address_id: req.body.address_id}
    })
    .then(newAddr => {
      console.log(newAddr)
      res.json(newAddr)
    });
});

app.post("/api/address", function(req, res) {
  //  console.log("put api/address")
  //  console.log(req.body)

  mysqldb.Address.create({
    entry_dtm: req.body.entry_dtm,
    user_id: req.body.user_id,
    street: req.body.street,
    pobox: req.body.pobox,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    country: req.body.country
    })
    .then(newAddr => {
      console.log(newAddr)
      res.json(newAddr)
    });
});

app.get("/api/address", function(req, res) {
  //console.log("get api/address " )
  //console.log(req)
  //console.log(req.query)

  if(req.query.address_id == 0){
    mysqldb.Address.findAll({
      where: {
        user_id: req.query.user_id
        }
      })
      .then(function (data) {
        console.log(data)
        res.json(data)
      })
  } else {
    console.log('specific')
    mysqldb.Address.findAll({
      where: {
        user_id: req.query.user_id,
        address_id: req.query.address_id
        }
      })
      .then(function (data) {
        console.log(data)
        res.json(data)
      })
  }
});

app.delete("/api/address", function(req, res) {
  //console.log("delete api/address")
  //console.log(req)
  mysqldb.Address.destroy({
    where: {address_id: req.body.address_id}
    })
    .then(deleted => {
      console.log('deleted '+req.body.address_id)
      res.send('OK')
    })
});

// Item Route
app.post("/api/item", function(req, res) {
  // This route will process when a  new item is added
  // the process will first insert/update a record into the mySQL database Item table
  // once that record is successfully created/updated the associated item_id will be used during
  // the creation/update of the ItemDetail collection within the MongoDB database. This way the
  // item_id will be used to link the data within the two databases

  //  console.log("post api/item")
  //  console.log(req.body)

  // create the mySQL item record
  mysqldb.Item.create({
    list_price: req.body.list_price,
    sale_price: req.body.sale_price,
    quantity: req.body.quantity
    })
    .then( (newItem) => {
      // console.log(newItem)

      // create the new record within the items MongoDB database ItemDetail collection
      // using the item_id to link the data within the two database
      const item = new ItemDetail({
        item_id: newItem.item_id,
        description: req.body.description,
        title: req.body.title,
        link: req.body.link,
        keywords: req.body.keywords
      })
      item.save(function(err, doc){
        if(err){
          console.log(err)
          res.send('OK')
        } else {
          res.json(doc)
        }
      })
    })
});

// when updating the item information both the MySQL database and the MongoDB database
// will be updated together to remain in sync of any changes
app.put("/api/item", function(req, res) {
  //  console.log("put api/item")
  //  console.log(req.body)
  // update mysqldb
  mysqldb.Item.update(
    {list_price: req.body.list_price,
      sale_price: req.body.sale_price,
      quantity: req.body.quantity},
      {where: {item_id: req.body.item_id}
    })
    .then(item => {
      // update mongodb
      const itemCollecttion = new ItemDetail({
        item_id: item.item_id,
        description: req.body.description,
        title: req.body.name,
        link: req.body.filelocation,
        keywords: req.body.keywords
        })
      itemCollecttion.save(function(err, doc){
        if(err){
          console.log(err)
          res.send('OK')
        } else {
          // console.log(doc)
          res.send('OK')
        }
      })
    //  console.log(item)
    });
});

// the item information will only be retrieved from the mySQL databas at this time based on the
// where clause of the information being requested
app.get("/api/item", function(req, res) {
  //  console.log("get api/item")
  //  console.log(req.query)
  if(req.query.item_id == 0){
    mysqldb.Item.findAll()
      .then(function (data) {
        //  console.log(data)
        res.json(data)
      })
  } else {
    mysqldb.Item.findAll({
      where: {
        item_id: req.query.item_id
        }
      })
      .then(function (data) {
        //console.log(data)
        res.json(data)
      })
    }
});

app.delete("/api/item", function(req, res) {
  // first remove the mongodb collection data that is there for the item_id
  const itemCollecttion = new ItemDetail()
  itemCollecttion.remove({item_id: req.body.item_id}, function(err, doc){
    if(err){
      console.log(err)
      res.send('OK')
    } else {
      // remove the transaction data once the item collection changes have been processed
      mysqldb.Item.destroy({
        where: {item_id: req.body.item_id}
        })
        .then(deleted => {
          res.send('OK')
        })
    }
  })
});


// User Route login
app.get("/api/user", function(req, res) {
  //console.log("api/user")
  //console.log(req.query)
  mysqldb.User.findAll({
    where : {
      username: req.query.username,
      password: req.query.password
      }
    })
    .then(function (data) {
      //  console.log(data)
      res.json(data)
    })
});

app.post("/api/user", function(req, res) {
  console.log("api/user")
  console.log(req.body)
    const eff_date = new Date()
    const access_type = 'BASIC'
    const status = 'ACTIVE'
    const lastlogin = new Date()
    mysqldb.User.create({
      email: req.body.username,
      username: req.body.username,
      password:req.body.password,
      eff_date: eff_date,
      access_type: access_type,
      status: status,
      lastlogin: lastlogin
      })
      .then(function (data) {
        console.log(data)
        res.json(data)
      })
});


//Route search
app.get("/api/search", function(req, res){
//  console.log("api/searchooooooo")
//  console.log(req.query)

//    var itemList = []

//		for (var i=0; i < 4; i++){
//			itemList.push({
//				name: 'Woman in GOLD Red',
//				description: 'Image of a woman in red sitting alone in a room',
//        item_id: (400+i),
//        link: 'city-gallery/20170706/LensSexy20161217-20161217DSC06743.jpg'
//			});
//		}
//    console.log(itemList)
//    res.json(itemList)

  ItemDetail.find({keywords: {$in: req.query.searchText.split(',')}}, function(err, data){
    if(err){
      console.log(err)
      res.send('OK')
    } else {
      console.log(data)
      res.json(data)
    }
  })
})


// Route shopping cart
app.get("/api/shopping", function(req, res){
//    console.log("get api/shopping")
//    console.log(req.query)
    mysqldb.ItemSale.findAll({
      where : {
        user_id: req.query.user_id,
        sale_id: null
      }
    })
      .then(function (data) {
        console.log(data)
        res.json(data)
      })
})

app.get("/api/itemdetail", function(req, res){
  if (req.query.item_id == 0){
    ItemDetail.find({}, function(err, data){
      if(err){
        console.log(err)
        res.send('OK')
      } else {
        console.log(data)
        res.json(data)
      }
    })
  } else {

    ItemDetail.find({item_id: req.query.item_id}, function(err, data){
      if(err){
        console.log(err)
        res.send('OK')
      } else {
        console.log(data)
        res.json(data)
      }
    })
  }
})

app.delete("/api/itemsale", function(req, res){
    console.log("deleting api/itemsale")
    console.log(req.body)
    mysqldb.ItemSale.destroy({
      where: {itemsale_id: req.body.itemsale_id,
      }
    })
    .then(function (data){
      console.log(data)
      // update item quantity to show the order
//      mysqldb.Item.update(
//        {quantity: (sequelize.col('quantity') - data.quantity)},
//          {where: {item_id: itemdata.item_id}
//        })
//        .then(result => {
//          console.log(result)
          res.json(result)
//        })

    })
})

// adds the item to the shopping cart by inserting a record into the ItemSale table
// for the current user id setting the price at the time its added to the cart
app.post("/api/shopping", function(req, res){
    console.log("post api/shopping")
    console.log(req.body)
    mysqldb.ItemSale.create({
      item_id: req.body.item_id,
      user_id: req.body.user_id,
      list_price: req.body.list_price,
      sale_price: req.body.sale_price,
      quantity: req.body.quantity
    })
    .then(function (data){
      // update item quantity to show the order
      mysqldb.Item.update(
        {quantity: (req.body.current_inventory - req.body.quantity)},
          {where: {item_id: req.body.item_id}
        })
        .then(item => {
          console.log(data)
          res.json(data)
        })
    })
})

// finalizes the sale by creating a record in the sale table
// moves the item out of the shopping cart by setting the itemsale.sale_id column
app.post("/api/buy", function(req, res){
    console.log("postooooooo api/buy")
    console.log(req.body)

    mysqldb.Sale.create({
			user_id: req.body.user_id,
			payment_id: req.body.payment_id,
			address_id: req.body.address_id,
			sale_dtm: req.body.sale_dtm,
			status: req.body.status,
			sale_category: req.body.sale_category,
			payment_type: req.body.payment_type
    })
    .then(function (sale){
      console.log('success')
      mysqldb.ItemSale.update({
          sale_id: sale.sale_id},
        {where: {user_id: req.body.user_id}}
      )
    })
})


// Route paymentnfo
app.post("/api/paymentinfo", function(req, res) {
    console.log("post api/paymentinfo")
    console.log(req)

    mysqldb.Payment.create({
      account_name: req.body.account_name,
      user_id: req.body.user_id,
      payment_type: req.body.payment_type,
      account_number: req.body.account_number,
      status: req.body.status,
      ccv: req.body.ccv,
      exp_date: req.body.exp_date
    })
    .then(newPayment => {console.log(newPayment)});
    res.send('OK')
});

app.put("/api/paymentinfo", function(req, res) {
  //  console.log("put api/paymentinfo")
  //  console.log(req.body)

  mysqldb.Payment.update({
      account_name: req.body.account_name,
      user_id: req.body.user_id,
      payment_type: req.body.payment_type,
      account_number: req.body.account_number,
      status: req.body.status,
      exp_date: req.body.exp_date,
      ccv: req.body.ccv},
      {where: {
        payment_id: req.body.payment_id}
        })
      .then(newAddr => {
        //console.log(newAddr)
        res.send('OK')
      });
});


app.delete("/api/paymentinfo", function(req, res) {
  console.log("delete api/paymentinfo")
  console.log(req)
  mysqldb.Payment.destroy({
    where: {payment_id: req.body.payment_id}
    })
    .then(deleted => {
      // console.log('deleted '+req.body.payment_id)
      res.send('OK')
    })
});


app.get("/api/paymentinfo", function(req, res) {
  //console.log("api/paymentinfo")
  //console.log(req.query)
  if(req.query.payment_id == 0){
    //console.log('all')
    mysqldb.Payment.findAll({
      where: {
        user_id: req.query.user_id
      }
    })
    .then(function (data) {
      //console.log(data)
      res.json(data)
    })
  } else {
    // console.log('specific')
    mysqldb.Payment.findAll({
      where: {
        user_id: req.query.user_id,
        payment_id: req.query.payment_id
        }
      })
      .then(function (data) {
        // console.log(data)
        res.json(data)
      })
  }
});


// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// -------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
