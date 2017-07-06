INSERT INTO soloproject_db.USERS
(
	user_id,
	email,
	username,
	password,
	eff_date,
	exp_date,
	access_type,
	status,
	lastlogin,
	createdAt,
	updatedAt
)
VALUES
(100,
 'admin.lastname@email.com',
 'admin',
 'password',
 sysdate(),
 null,
 'ADMIN',
 'ACTIVE',
 sysdate(),
 sysdate(),
 sysdate()
 );


 INSERT INTO soloproject_db.users
(
	user_id,
	email,
	username,
	password,
	eff_date,
	exp_date,
	access_type,
	status,
	lastlogin,
	createdAt,
	updatedAt
)
VALUES
(101,
 'basic.lastname@email.com',
 'Basic',
 'password',
 sysdate(),
 null,
 'BASIC',
 'ACTIVE',
 sysdate(),
 sysdate(),
 sysdate()
 );
 --===================================================================================
 INSERT INTO soloproject_db.addresses(
 address_id,
 entry_dtm,
 user_id,
 street,
 pobox,
 city,
 state,
 zip,
 country,
 createdAt,
 updatedAt)
VALUES (
203,
sysdate(),
100,
'My Street',
'34D',
'My City',
'PA',
'23432',
'USA',
sysdate(),
sysdate()
);

INSERT INTO soloproject_db.addresses(
 address_id,
 entry_dtm,
 user_id,
 street,
 pobox,
 city,
 state,
 zip,
 country,
 createdAt,
 updatedAt)
VALUES (
202,
sysdate(),
100,
'Our Street',
'32C',
'Our City',
'GA',
'34343',
'USA',
sysdate(),
sysdate()
);
INSERT INTO soloproject_db.addresses(
	address_id,
	entry_dtm,
	user_id,
	street,
	pobox,
	city,
	state,
	zip,
	country,
	createdAt,
	updatedAt)
VALUES (
200,
sysdate(),
101,
'My Street',
'34D',
'My City',
'PA',
'23432',
'USA',
sysdate(),
sysdate()
);

 INSERT INTO soloproject_db.addresses(
	address_id,
	entry_dtm,
	user_id,
	street,
	pobox,
	city,
	state,
	zip,
	country,
	createdAt,
	updatedAt)
VALUES (
201,
sysdate(),
101,
'Our Street',
'32C',
'Our City',
'GA',
'34343',
'USA',
sysdate(),
sysdate()
);
--=====================================================================
INSERT INTO soloproject_db.payments(
	payment_id,
	user_id,
	ccv,
	account_number,
	eff_date,
	exp_date,
	payment_type,
	status,
	createdAt,
	updatedAt
)
VALUES
(300,
 201,
 '2334',
 '2346767745',
 sysdate(),
 sysdate(),
 'AMEX',
'ACTIVE',
sysdate(),
sysdate()
);

INSERT INTO soloproject_db.payments(
	payment_id,
	user_id,
	ccv,
	account_number,
	eff_date,
	exp_date,
	payment_type,
	status,
	createdAt,
	updatedAt
)
VALUES
(301,
 201,
 '2874',
 '245453242445',
 sysdate(),
 sysdate(),
 'VISA',
'ACTIVE',
sysdate(),
sysdate()
);
INSERT INTO soloproject_db.payments(
	payment_id,
	user_id,
	ccv,
	account_number,
	eff_date,
	exp_date,
	payment_type,
	status,
	createdAt,
	updatedAt
)
VALUES
(302,
 201,
 '9574',
 '98293823232',
 sysdate(),
 sysdate(),
 'MASTERCARD',
'ACTIVE',
sysdate(),
sysdate()
);
INSERT INTO soloproject_db.payments(
	payment_id,
	user_id,
	ccv,
	account_number,
	eff_date,
	exp_date,
	payment_type,
	status,
	createdAt,
	updatedAt
)
VALUES
(303,
 201,
 '9754',
 '983498934435',
 sysdate(),
 sysdate(),
 'VISA',
'INACTIVE',
sysdate(),
sysdate()
);
--====================================================================================
INSERT INTO soloproject_db.items(
	item_id,
	list_price,
	sale_price,
	quantity,
	createdAt,
	updatedAt)
VALUES(400,
	10.00,
	10.00,
	5,
	sysdate(),
	sysdate()
);
INSERT INTO soloproject_db.items(
	item_id,
	list_price,
	sale_price,
	quantity,
	createdAt,
	updatedAt)
VALUES(401,
	16.00,
	13.00,
	5,
	sysdate(),
	sysdate()
);
INSERT INTO soloproject_db.items(
	item_id,
	list_price,
	sale_price,
	quantity,
	createdAt,
	updatedAt)
VALUES(402,
	17.00,
	14.00,
	5,
	sysdate(),
	sysdate()
);
INSERT INTO soloproject_db.items(
	item_id,
	list_price,
	sale_price,
	quantity,
	createdAt,
	updatedAt)
VALUES(403,
	26.00,
	13.00,
	5,
	sysdate(),
	sysdate()
);
