/** @format */

const Test_Items = require('../model/getItems');

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
	Test_Items.getAll((err, data) => {
		if (err)
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving customers.',
			});
		else res.send(data);
	});
};
