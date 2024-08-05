import { injectable } from 'tsyringe';
import { Role } from '../models/role';

@injectable()
export default class RoleRepository { // here we created the Repository, this class will receive the information will call the sequelize methods needed
    async findAll() { // this method will call findAll from sequelize
        return await Role.findAll();
    }

    async findById(id: number) { // this method will call findByPk from sequelize
        return await Role.findByPk(id);
    }

    async create(role: Partial<Role>) { // this method will call create from sequelize
        return await Role.create(role);
    }

    async update(id: number, role: Partial<Role>) { // this method will call findByPk and update from sequelize
        const existingRole = await Role.findByPk(id);
        if (existingRole) {
            return await existingRole.update(role);
        }
        throw new Error('Role not found');
    }

    async deleteById(id: number) { // this method will call findByPk and destroy from sequelize
        const role = await Role.findByPk(id);
        if (role) {
            await role.destroy();
            return;
        }
        throw new Error('Role not found');
    }
}