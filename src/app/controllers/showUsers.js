/** @format */

const Users_model = require('../model/fetch_all_users');

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
	Users_model.getAll((err, data) => {
		if (err)
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving users.',
			});
		else res.send(data);
	});
};
