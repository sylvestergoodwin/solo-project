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
//mongoose.connect("mongodb://localhost/soloproject");

// production database
mongoose.connect("mongodb://soloproject:soloproject@ds151202.mlab.com:51202/soloproject")
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
mysqldb.sequelize.sync({ force: true })
	.then(function() {
		console.log("mysql Connection Successfull");
    console.log("----------------------------------------------------------------.");
	})
	.catch(function (){
		console.log("mysql Connection failed")
	});

// -------------------------------------------------
// Route
app.put("/api/address", function(req, res) {
    console.log("put api/address")
    console.log(req.body)

    mysqldb.Address.update(
      {user_id: req.body.user_id,
        street: req.body.street,
        pobox: req.body.pobox,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        country: req.body.country},
      {where: {address_id: req.body.address_id}
    })
    .then(newAddr => {console.log(newAddr)});
    res.send('OK')
});

app.post("/api/address", function(req, res) {
    console.log("put api/address")
    console.log(req.body)

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
    .then(newAddr => {console.log(newAddr)});
    res.send('OK')
});

app.get("/api/address", function(req, res) {
  console.log("get api/address " )
  console.log(req)
  console.log(req.query)

  if(req.query.address_id == 0){
    console.log('all')
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
  console.log("delete api/address")
  console.log(req)
  mysqldb.Address.destroy({
    where: {address_id: req.body.address_id}
  })
  .then(deleted => {
    console.log('deleted '+req.body.address_id)
    res.send('OK')
  })
});

// Route
app.post("/api/item", function(req, res) {
    console.log("post api/item")
    console.log(req.body)

    mysqldb.Item.create({
      list_price: req.body.list_price,
      sale_price: req.body.sale_price,
      quantity: req.body.quantity
    })
    .then(newItem => {
      console.log(newItem)
      const item = new ItemDetail({
        item_id: newItem.item_id,
        description: req.body.description,
        title: req.body.name,
        link: req.body.filelocation,
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

app.put("/api/item", function(req, res) {
    console.log("put api/item")
    console.log(req.body)
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
            console.log(doc)
            res.send('OK')
          }
        })
        console.log(item)
      });
});

app.get("/api/item", function(req, res) {
    console.log("get api/item")
    console.log(req.query)
    if(req.query.item_id == 0){
      mysqldb.Item.findAll()
        .then(function (data) {
          console.log(data)
          res.json(data)
        })
    } else {
      mysqldb.Item.findAll({
        where: {
          item_id: req.query.item_id
        }
      })
        .then(function (data) {
          console.log(data)
          res.json(data)
        })
    }
});


app.delete("/api/item", function(req, res) {
  console.log("delete api/item")
  console.log(req)
  mysqldb.Payment.destroy({
    where: {item_id: req.body.item_id}
  })
  .then(deleted => {
    console.log('deleted '+req.body.item_id)
    res.send('OK')
  })
});


// Route login
app.get("/api/user", function(req, res) {
  console.log("api/user")
  console.log(req.query)
    mysqldb.User.findAll({
      where : {
        username: req.query.username,
        password: req.query.password
      }}
    )
      .then(function (data) {
        console.log(data)
        res.json(data)
      })
});

app.post("/api/user", function(req, res) {
  console.log("api/user")
  console.log(req.body)
    const eff_date = new Date()
    const access_type = 'ADMIN'
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
  console.log("api/searchooooooo")
  console.log(req.query)

    var itemList = []

		for (var i=0; i < 4; i++){
			itemList.push({
				name: 'Woman in GOLD Red',
				description: 'Image of a woman in red sitting alone in a room',
        item_id: (400+i)
			});
		}
    console.log(itemList)
    res.json(itemList)

//  ItemDetail.find({keywords: {$in: req.query.searchText.split(',')}}, function(err, data){
//    console.log(data)
//    res.json(data)
//  })
})


// Route shopping cart
app.get("/api/shopping", function(req, res){
    console.log("get api/shopping")
    console.log(req.query)
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

app.delete("/api/itemsale", function(req, res){
    console.log("deleting api/itemsale")
    console.log(req.body)
    mysqldb.ItemSale.destroy({
      where: {itemsale_id: req.body.itemsale_id,
      }
    })
    .then(function (data){
      console.log(data)
      res.json(data)
    })
})

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
      console.log(data)
      res.json(data)
    })
})

app.post("/api/buy", function(req, res){
    console.log("post api/shopping")
    console.log(req)
    mysqldb.ItemSale.create({
      user_id: req.body.user_id
    })
    .then(function (itemsale){
      console.log('success')

      mysqldb.Item.update({
          sale_id: itemsale.sale_id},
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
    console.log("put api/paymentinfo")
    console.log(req.body)

    mysqldb.Payment.update(
      {account_name: req.body.account_name,
      user_id: req.body.user_id,
      payment_type: req.body.payment_type,
      account_number: req.body.account_number,
      status: req.body.status,
      exp_date: req.body.exp_date,
      ccv: req.body.ccv},
      {where: {payment_id: req.body.payment_id}
    })
    .then(newAddr => {console.log(newAddr)});
    res.send('OK')
});


app.delete("/api/paymentinfo", function(req, res) {
  console.log("delete api/paymentinfo")
  console.log(req)
  mysqldb.Payment.destroy({
    where: {payment_id: req.body.payment_id}
  })
  .then(deleted => {
    console.log('deleted '+req.body.payment_id)
    res.send('OK')
  })
});


app.get("/api/paymentinfo", function(req, res) {
  console.log("api/paymentinfo")
  console.log(req.query)
  if(req.query.payment_id == 0){
    console.log('all')
    mysqldb.Payment.findAll({
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
    mysqldb.Payment.findAll({
      where: {
        user_id: req.query.user_id,
        payment_id: req.query.payment_id
      }
    })
      .then(function (data) {
      console.log(data)
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
