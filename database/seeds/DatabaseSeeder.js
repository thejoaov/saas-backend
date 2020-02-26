'use strict';

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
const User = use('App/Models/User');
const Role = use('Adonis/Acl/Role');
const Permission = use('Adonis/Acl/Permission');
const Env = use('Env');

class DatabaseSeeder {
	async run() {
		const user = await User.create({
			name: 'Admin Adminosvaldo',
			email: 'admin@admin.com',
			password: Env.get('ADMIN_PASSWORD'),
		});

		const createInvite = await Permission.create({
			slug: 'invites_create',
			name: 'Convidar membros',
		});

		const createProject = await Permission.create({
			slug: 'projects_create',
			name: 'Criar projetos',
		});

		const admin = await Role.create({
			slug: 'administrator',
			name: 'Administrador',
		});

		const moderator = await Role.create({
			slug: 'moderator',
			name: 'Moderador',
		});

		await Role.create({
			slug: 'visitor',
			name: 'Visitante',
		});

		await admin.permissions().attach([createInvite.id, createProject.id]);
		await moderator.permissions().attach([createProject.id]);

		const team = await user.teams().create({
			name: 'PManage Admin Especial Team',
			user_id: user.id,
		});

		const teamJoin = await user
			.teamJoins()
			.where('team_id', team.id)
			.first();

		await teamJoin.roles().attach([admin.id]);
	}
}

module.exports = DatabaseSeeder;
