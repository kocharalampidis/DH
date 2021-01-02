/** @format */

module.exports = (app) => {
	// // Create a new User
	// const Users = require('../../Controllers/createUser');
	// app.post('/users', Users.create);

	// Retrieve all Customers
	const Users = require('../../Controllers/showUsers');
	app.get('/users', Users.findAll);

	// Retrieve a single Customer with customerId
	const Users_find = require('../../Controllers/findOne');
	app.get('/users/:userId', Users_find.findOne);

	// // Update a Customer with customerId
	// app.put('/customers/:customerId', customers.update);

	// // Delete a Customer with customerId
	// app.delete('/customers/:customerId', customers.delete);

	// // Create a new Customer
	// app.delete('/customers', customers.deleteAll);
};
