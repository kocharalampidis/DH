/** @format */

const sql = require('./dbConnection');
const test_table = require('../config/Database_Configs/dbTables');
// constructor
const Customer = function (customer) {
	this.email = customer.email;
	this.name = customer.name;
	this.active = customer.active;
};

Customer.getAll = (result) => {
	sql.query(`SELECT * FROM ${test_table.TEST_TABLE}`, (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(null, err);
			return;
		}

		console.log('customers: ', res);
		result(null, res);
	});
};

module.exports = Customer;
