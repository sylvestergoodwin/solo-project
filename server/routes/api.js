// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================


// 	REST API ROUTES
// 	Put		-- Replace the entire collection with another collection.
//	Post	-- Create a new entry in the collection. The new entry's URI is assigned automatically and is usually returned by the operation
//	Get		-- Retrieve a representation of the addressed member of the collection, expressed in an appropriate Internet media type.
//	Delete	-- Delete the entire collection
// =============================================================



module.exports = function(app) {
	Router = require('express').Router();
	Router.get("test", function(req, res){
		console.log("I be got")
		res.send('OK')
	})

	// USER
	// Get route for checking if the email already exists within the system
	app.get("/api/checkEmail/", function(req, res) {
		res.json({result: 'Error',
		 msg: 'User Email already within the system'			
		})
		
		/*
		mysqldb.User.findAll({
			where {
					email: req.body.email
				}
			})
			.then(function(data) {
				// if a record exists then
				res.json({result: 'Error',
					msg: 'Email already within the system'
				});

				// if no record exists then
				res.json({result: 'Success',
					msg: 'User email not found'
				});
		
			});
		*/
	});

    app.post("/api/user", function(req, res) {
		console.log(req.body);
		/*
		mysqldb.User.create({
				username: req.body.username,
				password: req.body.password,
				email: req.body.email
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	});

    app.put("/api/user", function(req, res) {
		console.log(req.body);
		/*
		mysqldb.User.update({
				username: req.body.username,
				password: req.body.password,
				email: req.body.email
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	});
	
	app.get("/api/login/", function(req, res) {
		res.json({
			username: 'Jeffrey',
			password: 'Nisester',
			email: 'jeffery@cos.net',
			lastlogin: '21-March-2017', 
			status: 'ACTIVE',
			user_id: 32323
		})
		/*
		mysqldb.User.findAll({
				username: req.body.username,
				password: req.body.password			
			})
			.then(function(data) {
				// if a record exists then
				res.json({result: 'Error',
					msg: 'Email already within the system'
				});
				
				// if no record exists then
				res.json({result: 'Success',
					msg: 'User email not found'
				});
		
			});
		*/	
	});
	
	// ADDRESS
	// Get route for returning list of active user addresses
	// Called when the user pulls up a list of addresses
	app.get("/api/address", function(req, res) {
		
		console.log(req.body)
		res.json([{address_id: 12121,
		entry_dtm: '12-Jun-2017',
		user_id: 12134,
		street: 'My Street 34',
		pobox: '34B',
		city: 'Our Town',
		state: 'PA',
		zip: '23234',
		country: 'USA',
		createdAt: '12-Jan-2017',
		updatedAt: '12-Feb-2017'
		},
		{address_id: 1232,
		entry_dtm: '12-Jun-2017',
		user_id: 12134,
		street: 'Main Street 34',
		pobox: '3B',
		city: 'Our Town',
		state: 'PA',
		zip: '23224',
		country: 'USA',
		createdAt: '12-Jan-2017',
		updatedAt: '12-Feb-2017'
		}])
		/*
		mysqldb.Address.findAll({
			where: {
				user_id: req.body.user_id,
				status: 'ACTIVE'
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	});

	app.post("/api/address", function(req, res) {
		
		console.log(req.body)
		
		/*
		const addr = req.body.address
		mysqldb.Address.create(addr)
			.then(function(data) {
				res.json(data);
			});
		*/	
	});	
  
 	app.put("/api/address", function(req, res) {
		console.log(req.body)
		/*
		const addr = req.body.address
		mysqldb.Address.update(addr, {
			where: {
				user_id: req.body.user_id,
				status: 'ACTIVE'
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	});	
   
  
	// PAYMENT
	// Get route for returning list of active user addresses
	app.get("/api/paymentinfo", function(req, res) {
		console.log(req.body)
		
		res.json([
					{payment_id: 10333,
					user_id:  23234,
					ccv: '3242',
					account_number: '23234231212',
					eff_date: '23-Dec-2016',
					exp_date: '10-Feb-2020',
					payment_type: 'AMEX',
					status: 'ACTIVE'}
				])
		/*		
		mysqldb.Payment.findAll({
			where: {
				user_id: req.params.user_id,
				status: req.params.status
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	});
  
	app.post("/api/paymentinfo", function(req, res) {
		console.log(req.body)
		/*
		mysqldb.Payment.create({
			where: {
				user_id: req.params.user_id,
				status: req.params.status
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	}); 
    
	app.put("/api/paymentinfo", function(req, res) {
		console.log(req.body)
		
		/*
		mysqldb.Payment.update({
			where: {
				user_id: req.params.user_id,
				status: req.params.status
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	});
    	
	app.delete("/api/paymentinfo", function(req, res) {
		console.log(req.body)
		
		/*
		mysqldb.Payment.delete({
			where: {
				user_id: req.params.user_id,
				status: req.params.status
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	});
    	

	// ITEM
	app.get("/api/item", function(req, res) {
		console.log(req.body)
		
		res.json([{
				item_id: 23343,
				list_price: 23.23,
				sale_price: 12.43,
				quantity: 3
			},
			{		
				item_id: 12131,
				list_price: 12.34,
				sale_price: 11.34,
				quantity: 1
			}])
		/*
		mysqldb.Item.findAll({
			where: {
				user_id: req.params.user_id,
				status: req.params.status
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	});
  
	app.post("/api/item", function(req, res) {
		console.log(req.body)
		/*
		mysqldb.Item.findAll({
			where: {
				user_id: req.params.user_id,
				status: req.params.status
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	}); 
    
	app.put("/api/item", function(req, res) {
		console.log(req.body)
		/*
		mysqldb.Item.findAll({
			where: {
				user_id: req.params.user_id,
				status: req.params.status
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	});
    		
	
	// SEARCH
	app.get("/api/search", function(req, res) {
		console.log(req.body)
		req.json([{
				name: 'Oki',
				description: 'the big one next to the little one',
				link: '\ejrj\erer.jpg'
			},
				{
				name: 'Mikey',
				description: 'the big one next to the big one',
				link: '\ejrj\rer.jpg'},
					{
				name: 'GGGeuer',
				description: 'the big one next to the little one',
				link: '\ejrj\erer.jpg'}
		])
		/*
		mongodb.Item.findAll({
			where: {
				user_id: req.params.user_id,
				status: req.params.status
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	});
  
	
	// SHOPPING CART
	app.get("/api/cart", function(req, res) {
		console.log(req.body)
		res.json({sale_id: 2113,
			sale_total: 212.12,
			sale_items: [{item_id: 1332,
					quantity: 3,
					list_price: 12.11,
					sale_price: 10.11,
					link: 'eiep\eiwoe.jpg',
					name: 'Pie'
					},
					{item_id: 22,
					quantity: 1,
					list_price: 22.11,
					sale_price: 15.11,
					link: 'eiep\eiwoe.jpg',
					name: 'Pie'
				}]
		})
		/*
		mysqldb.Post.findAll({
			where: {
				user_id: req.params.user_id,
				status: req.params.status
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	});
  
	app.post("/api/cart", function(req, res) {
		console.log(req.body)
		
		/*
		mysqldb.Post.findAll({
			where: {
				user_id: req.params.user_id,
				status: req.params.status
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	}); 
    
	app.put("/api/cart", function(req, res) {
		console.log(req.body)
		/*
		mysqldb.Post.findAll({
			where: {
				user_id: req.params.user_id,
				status: req.params.status
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	});
    	
	app.delete("/api/cart", function(req, res) {
		console.log(req.body)
		/*
		mysqldb.Post.findAll({
			where: {
				user_id: req.params.user_id,
				status: req.params.status
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	});
    
	    	
	app.post("/api/sale", function(req, res) {
		console.log(req.body)
		/*
		mysqldb.Post.findAll({
			where: {
				user_id: req.params.user_id,
				status: req.params.status
				}
			})
			.then(function(data) {
				res.json(data);
			});
		*/	
	});
};
