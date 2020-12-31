/** @format */

const Users_model = require('../model/getUsers');

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
