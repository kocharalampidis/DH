/** @format */

// constructor
const Users = function (Users) {
	this.id = Users.id;
	this.first_name = Users.first_name;
	this.last_name = Users.last_name;
	this.email = Users.email;
	this.gender = Users.gender;
	this.added = Users.added;
};

module.exports = Users;

//create exports of MySQL Tables
module.exports = {
	TABLE: 'users',
};
