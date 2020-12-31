/** @format */

const sql = require('../Configs/Database_Configs/Database_Connection/Db_Connector');
const test_table = require('../Configs/Database_Configs/dbTables');

const Test_Items = require('../Configs/Database_Configs/Table_Handlers/Test_Items_handler');

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
