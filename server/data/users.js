import bcrypt from "bcrypt"

const users = [
	{
		name: 'Ratan User',
		email: 'ratan@gmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true
	},
	{
		name: 'Gagan User',
		email: 'gagan@gmail.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'John User',
		email: 'john@gmail.com',
		password: bcrypt.hashSync('123456', 10),
	},
]

export default users;