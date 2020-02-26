"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const UserTeam = use("App/Models/UserTeam");

/**
 * Resourceful controller for interacting with members
 */
class MemberController {
	/**
	 * Show a list of all members.
	 * GET members
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index({ request, response, view }) {
		const members = await UserTeam.query()
			.where("team_id", request.team.id)
			.with("user")
			.with("roles")
			.fetch();

		return members;
	}

	/**
	 * Update member details.
	 * PUT or PATCH members/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update({ params, request, response }) {
		const roles = request.input("roles");

		const teamJoin = await UserTeam.find(params.id);

		await teamJoin.roles().sync(roles);
	}
}

module.exports = MemberController;
