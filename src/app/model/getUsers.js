/** @format */

const sql = require('./dbConnection');

// constructor
const Customer = function (customer) {
	this.email = customer.email;
	this.name = customer.name;
};

Customer.getAll = (result) => {
	sql.query('SELECT * FROM test_table', (err, res) => {
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
