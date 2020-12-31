/** @format */

const sql = require('../configs/Database_Configs/Database_Connection/Db_Connector');
const Users_table_handler = require('../configs/Database_Configs/Table_Handlers/User_handler');
// // constructor
// const Customer = function (customer) {
// 	this.email = customer.email;
// 	this.name = customer.name;
// };

Users_table_handler.getAll = (result) => {
	sql.query(`SELECT * FROM ${Users_table_handler.TABLE}`, (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(null, err);
			return;
		}

		console.log('customers: ', res);
		result(null, res);
	});
};

module.exports = Users_table_handler;
