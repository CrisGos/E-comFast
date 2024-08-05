import { injectable } from 'tsyringe';
import { Permission } from '../models/permission';

@injectable()
export default class PermissionRepository { // here we created the Repository, this class will receive the information will call the sequelize methods needed
    async findAll() { // this method will call findAll from sequelize
        return await Permission.findAll();
    }

    async findById(id: number) { // this method will call findByPk from sequelize
        return await Permission.findByPk(id);
    }

    async create(permission: Partial<Permission>) { // this method will call create from sequelize
        return await Permission.create(permission);
    }

    async update(id: number, permission: Partial<Permission>) { // this method will call findByPk and update from sequelize
        const existingPermission = await Permission.findByPk(id);
        if (existingPermission) {
            return await existingPermission.update(permission);
        }
        throw new Error('Permission not found');
    }

    async deleteById(id: number) { // this method will call findByPk and destroy from sequelize
        const permission = await Permission.findByPk(id);
        if (permission) {
            await permission.destroy();
            return;
        }
        throw new Error('Permission not found');
    }
}