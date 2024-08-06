import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RoleService from '../services/roleService';



export default class RoleController { // Controller class of roles, this class will start with the call of processes after the router
    static async getAllRoles(_: Request, res: Response) {// Get all roles has a dependency in services, this method will give a response and will catch any exceptions during the process of GET
        try {
            const roleService = container.resolve(RoleService); // Get roles by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
            const roles = await roleService.getAllRoles();
            if (!roles) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json({
                message: "Data Fetched",
                data: roles
            })

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async getRolesById(req: Request, res: Response) { // Get roles by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
        try {
            const roleService = container.resolve(RoleService);
            const roles = await roleService.getRolesById(parseInt(req.params.id));
            if (!roles) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(roles)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
    
    static async createRoles(req: Request, res: Response) { // create roles also has a dependency in services, this method will give a response and will catch any exceptions during the process of POST
        try {
            const roleService = container.resolve(RoleService);
            
            const roles = await roleService.createRoles(req.body);
            console.log(roles.toJSON());
            res.status(201).json(roles)

        } catch (error) {
            res.status(400).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async updateRoles(req: Request, res: Response) {  // update roles by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of PUT an specific role
        try {
            const roleService = container.resolve(RoleService);
            const roles = await roleService.updateRoles(parseInt(req.params.id), req.body);
            res.status(200).json(roles);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async deleteRoles(req: Request, res: Response) { // delete roles by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of DELETE a role given by params
        try {
            const roleService = container.resolve(RoleService);
            const roles = await roleService.deleteRoles(parseInt(req.params.id));
            res.status(200).json({
                nessage: "Data deleted successfully"
            });
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
}