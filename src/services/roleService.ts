import RoleRepository from '../repositories/roleRepository';
import { injectable, inject } from 'tsyringe';
import { Role } from "../models/role";

@injectable()
export default class RoleService { // this class will receive params and / or body from controllers call and will insert it into repositories to call sequelize methods
    constructor(@inject(RoleRepository) private roleRepository: RoleRepository) {}

    async getAllRoles() { // This method will connect with repositorie of GET
        return await this.roleRepository.findAll(); 
    }

    async getRolesById(id: number) { // This method will connect with repositorie of GET by ID
        return await this.roleRepository.findById(id);
    }

    async createRoles(role: Partial<Role>) { // This method will connect with repositorie of POST with role type
        return await this.roleRepository.create(role);
    }

    async updateRoles(id: number, role: Partial<Role>) { // This method will connect with repositorie of UPDATE with role type
        return await this.roleRepository.update(id, role);
    }

    async deleteRoles(id: number) { // This method will connect with repositorie of DELETE
        return await this.roleRepository.deleteById(id);
    }
}