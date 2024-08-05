import { Router } from 'express';
import PermissionController from '../controllers/permissionController';

export const permissionRouter = Router();

try {
    permissionRouter.get('/', PermissionController.getAllPermissions);
    permissionRouter.get('/:id', PermissionController.getPermissionsById);
    permissionRouter.post('/', PermissionController.createPermissions);
    permissionRouter.put('/:id', PermissionController.updatePermissions);
    permissionRouter.delete('/:id', PermissionController.deletePermissions);
    
} catch (error) {
    throw new Error(`An error occurred: ${error}`);
}