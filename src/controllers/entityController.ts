import { Request, Response } from 'express';
import { container } from 'tsyringe';
import EntityService from '../services/entityService';



export default class EntityController { // Controller class of entities, this class will start with the call of processes after the router
    static async getAllEntities(_: Request, res: Response) {// Get all entities has a dependency in services, this method will give a response and will catch any exceptions during the process of GET
        try {
            const entityService = container.resolve(EntityService); // Get entities by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
            const entities = await entityService.getAllEntities();
            if (!entities) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json({
                message: "Data Fetched",
                data: entities
            })

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async getEntitiesById(req: Request, res: Response) { // Get entities by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
        try {
            const entityService = container.resolve(EntityService);
            const entities = await entityService.getEntitiesById(parseInt(req.params.id));
            if (!entities) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(entities)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
    
    static async createEntities(req: Request, res: Response) { // create entities also has a dependency in services, this method will give a response and will catch any exceptions during the process of POST
        try {
            const entityService = container.resolve(EntityService);
            
            const entities = await entityService.createEntities(req.body);
            console.log(entities.toJSON());
            res.status(201).json(entities)

        } catch (error) {
            res.status(400).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async updateEntities(req: Request, res: Response) {  // update entities by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of PUT an specific entity
        try {
            const entityService = container.resolve(EntityService);
            const entities = await entityService.updateEntities(parseInt(req.params.id), req.body);
            res.status(200).json(entities);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async deleteEntities(req: Request, res: Response) { // delete entities by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of DELETE a entity given by params
        try {
            const entityService = container.resolve(EntityService);
            const entities = await entityService.deleteEntities(parseInt(req.params.id));
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