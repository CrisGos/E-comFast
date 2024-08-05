import PermissionRepository from '../repositories/permissionRepository';
import { injectable, inject } from 'tsyringe';
import { Permission } from "../models/permission";

@injectable()
export default class PermissionService { // this class will receive params and / or body from controllers call and will insert it into repositories to call sequelize methods
    constructor(@inject(PermissionRepository) private permissionRepository: PermissionRepository) {}

    async getAllPermissions() { // This method will connect with repositorie of GET
        return await this.permissionRepository.findAll(); 
    }

    async getPermissionsById(id: number) { // This method will connect with repositorie of GET by ID
        return await this.permissionRepository.findById(id);
    }

    async createPermissions(permission: Partial<Permission>) { // This method will connect with repositorie of POST with permission type
        console.log(2);
        return await this.permissionRepository.create(permission);
    }

    async updatePermissions(id: number, permission: Partial<Permission>) { // This method will connect with repositorie of UPDATE with permission type
        return await this.permissionRepository.update(id, permission);
    }

    async deletePermissions(id: number) { // This method will connect with repositorie of DELETE
        return await this.permissionRepository.deleteById(id);
    }
}