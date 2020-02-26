"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Role = use("Adonis/Acl/Role");

class RoleController {
	async index() {
		const roles = await Role.all();

		return roles;
	}
}

module.exports = RoleController;
