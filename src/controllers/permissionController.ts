import { Request, Response } from 'express';
import { container } from 'tsyringe';
import PermissionService from '../services/permissionService';



export default class PermissionController { // Controller class of permissions, this class will start with the call of processes after the router
    static async getAllPermissions(_: Request, res: Response) {// Get all permissions has a dependency in services, this method will give a response and will catch any exceptions during the process of GET
        try {
            const permissionService = container.resolve(PermissionService); // Get permissions by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
            const permissions = await permissionService.getAllPermissions();
            if (!permissions) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(permissions)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async getPermissionsById(req: Request, res: Response) { // Get permissions by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
        try {
            const permissionService = container.resolve(PermissionService);
            const permissions = await permissionService.getPermissionsById(parseInt(req.params.id));
            if (!permissions) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(permissions)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
    
    static async createPermissions(req: Request, res: Response) { // create permissions also has a dependency in services, this method will give a response and will catch any exceptions during the process of POST
        try {
            const permissionService = container.resolve(PermissionService);
            
            const permissions = await permissionService.createPermissions(req.body);
            console.log(permissions.toJSON());
            res.status(201).json(permissions)

        } catch (error) {
            res.status(400).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async updatePermissions(req: Request, res: Response) {  // update permissions by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of PUT an specific permission
        try {
            const permissionService = container.resolve(PermissionService);
            const permissions = await permissionService.updatePermissions(parseInt(req.params.id), req.body);
            res.status(200).json(permissions);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async deletePermissions(req: Request, res: Response) { // delete permissions by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of DELETE a permission given by params
        try {
            const permissionService = container.resolve(PermissionService);
            const permissions = await permissionService.deletePermissions(parseInt(req.params.id));
            res.status(200).json(permissions);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
}