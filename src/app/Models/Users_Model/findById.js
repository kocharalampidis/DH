/** @format */

const sql = require('../../Configs/Database_Configs/Database_Connection/Db_Connector');
const Users_table_handler = require('../../Configs/Database_Configs/Table_Handlers/User_handler');

Users_table_handler.findById = (userId, result) => {
	sql.query(`SELECT * FROM users WHERE id = ${userId}`, (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		if (res.length) {
			console.log('found customer: ', res[0]);
			result(null, res[0]);
			return;
		}

		// not found Customer with the id
		result({ kind: 'not_found' }, null);
	});
};

module.exports = Users_table_handler;
