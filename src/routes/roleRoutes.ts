import { Router } from 'express';
import RoleController from '../controllers/roleController';

export const roleRouter = Router();

try {
    roleRouter.get('/', RoleController.getAllRoles);
    roleRouter.get('/:id', RoleController.getRolesById);
    roleRouter.post('/', RoleController.createRoles);
    roleRouter.put('/:id', RoleController.updateRoles);
    roleRouter.delete('/:id', RoleController.deleteRoles);
    
} catch (error) {
    throw new Error(`An error occurred: ${error}`);
}