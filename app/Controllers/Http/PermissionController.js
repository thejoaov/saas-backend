'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const UserTeam = use('App/Models/UserTeam');
/**
 * Resourceful controller for interacting with permissions
 */
class PermissionController {
	/**
	 * Display a single permission.
	 * GET permissions/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show({ request, auth }) {
		const teamJoin = await UserTeam.query()
			.where('team_id', request.team.id)
			.where('user_id', auth.user.id)
			.first();

		return {
			roles: await teamJoin.getRoles(),
			permissions: await teamJoin.getPermissions(),
		};
	}
}

module.exports = PermissionController;
