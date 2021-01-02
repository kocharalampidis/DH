/** @format */

const Users_model = require('../Models/Users_Model/findById');

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
	Users_model.findById(req.params.userId, (err, data) => {
		if (err) {
			if (err.kind === 'not_found') {
				res.status(404).send({
					message: `Not found Customer with id ${req.params.userId}.`,
				});
			} else {
				res.status(500).send({
					message: 'Error retrieving Customer with id ' + req.params.userId,
				});
			}
		} else res.send(data);
	});
};
