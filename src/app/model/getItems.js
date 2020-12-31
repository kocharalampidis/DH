/** @format */

const sql = require('./dbConnection');
const test_table = require('../config/Database_Configs/dbTables');
// constructor
const Test_Items = function (Test_Items) {
	this.t1 = Test_Items.t1;
	this.t2 = Test_Items.t2;
	this.t3 = Test_Items.t3;
	this.t4 = Test_Items.t4;
	this.t5 = Test_Items.t5;
	this.t6 = Test_Items.t6;
};

Test_Items.getAll = (result) => {
	sql.query(`SELECT * FROM ${test_table.ITEMS_TABLE}`, (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(null, err);
			return;
		}

		console.log('Test_Items: ', res);
		result(null, res);
	});
};

module.exports = Test_Items;
