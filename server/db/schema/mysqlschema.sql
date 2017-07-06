CREATE DATABASE soloproject_db;

CREATE TABLE soloproject_db.users(
	user_id 			NUMBER       		NOT NULL	AUTO_INCREMENT,
	email				VARCHAR(200)	 	NOT NULL,
	username			VARCHAR(50)				NULL,
	password			VARCHAR(500)		NOT NULL,
	eff_date			DATE				NOT NULL,
	exp_date			DATE					NULL,
	access_type			VARCHAR(10)			NOT NULL	DEFAULT 'BASIC',
	status				VARCHAR(10)			NOT NULL	DEFAULT 'ACTIVE',
	lastlogin			DATETIME				NULL,
	createdAt           DATETIME				NULL,
	updatedAt			DATETIME				NULL
);

CREATE TABLE soloproject_db.addresses(
	address_id         	NUMBER				NOT NULL	AUTO_INCREMENT,
	entry_dtm			DATETIME			NOT NULL,
	user_id				NUMBER				NOT NULL,
	street				VARCHAR(100)			NULL,
	pobox				VARCHAR(50)				NULL,
	city				VARCHAR(100)			NULL,
	state				VARCHAR(50)				NULL,
	zip					VARCHAR(15)				NULL,
	country             VARCHAR(50)			NOT NULL,
	createdAt           DATETIME				NULL,
	updatedAt			DATETIME				NULL
);

CREATE TABLE soloproject_db.items(
	item_id				NUMBER				NOT NULL	AUTO_INCREMENT,
	list_price			DECIMAL				NOT NULL,
	sale_price			DECIMAL					NULL,
	quantity			INTEGER				NOT NULL 	DEFAULT 0,
	createdAt           DATETIME				NULL,
	updatedAt			DATETIME				NULL
);

CREATE TABLE soloproject_db.sales(
	sale_id				NUMBER				NOT NULL 	AUTO_INCREMENT,
	sale_dtm			DATETIME			NOT NULL,
	user_id				NUMBER				NOT NULL,
	sale_category		VARCHAR(50)				NULL,
	payment_type		VARCHAR(20)			NOT NULL,
	status				VARCHAR(10)			NOT NULL,
	sales_total			DECIMAL				NOT NULL,
	createdAt           DATETIME				NULL,
	updatedAt			DATETIME				NULL
);

CREATE TABLE soloproject_db.itemsales(
	itemsale_id			NUMBER				NOT NULL	AUTO_INCREMENT,
	item_id				NUMBER				NOT NULL,
	sale_id				NUMBER				NOT NULL,
	sale_dtm			DATETIME 			NOT NULL,
	user_id				NUMBER				NOT NULL,
	item_category		VARCHAR(50)				NULL,
	promotion_id		NUMBER					NULL,
	list_price			DECIMAL				NOT NULL,
	sale_price  		DECIMAL					NULL,
	quantity			INTEGER				NOT NULL,
	createdAt           DATETIME				NULL,
	updatedAt			DATETIME				NULL
);

CREATE TABLE soloproject_db.payments(
	payment_id			NUMBER				NOT NULL	AUTO_INCREMENT,
	user_id				NUMBER				NOT NULL,
	ccv					VARCHAR(10)				NULL,
	account_name		VARCHAR(20)				NULL,
	account_number		VARCHAR(20)				NULL,
	eff_date			DATE					NULL,
	exp_date			DATE					NULL,
	payment_type		VARCHAR(20)				NULL,
	status				VARCHAR(10)				NULL,
	createdAt           DATETIME				NULL,
	updatedAt			DATETIME				NULL
);
