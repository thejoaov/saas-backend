"use strict";

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");

class DatabaseSeeder {
	async run() {
		const user = await User.create({
			name: "João Victor",
			email: "jvictorsantos852@gmail.com",
			password: "12345678",
		});

		await user.teams().create({
			name: "i.ti",
			user_id: user.id,
		});
	}
}

module.exports = DatabaseSeeder;
