/** @format */

const sql = require('../../Configs/Database_Configs/Database_Connection/Db_Connector');
const Users_table_handler = require('../../Configs/Database_Configs/Table_Handlers/User_handler');

const id = Users_table_handler.name;

Users_table_handler.createUser = (result) => {
	sql.query(
		`INSERT INTO ${Users_table_handler.TABLE} VALUES(?, ?)`,
		(err, res) => {
			if (err) {
				console.log('error: ', err);
				result(null, err);
				return;
			}

			console.log('customers: ', res);
			result(null, res);
		},
	);
};

module.exports = Users_table_handler;
