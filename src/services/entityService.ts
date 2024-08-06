import EntityRepository from '../repositories/entityRepository';
import { injectable, inject } from 'tsyringe';
import { Entity } from "../models/entity";

@injectable()
export default class EntityService { // this class will receive params and / or body from controllers call and will insert it into repositories to call sequelize methods
    constructor(@inject(EntityRepository) private entityRepository: EntityRepository) {}

    async getAllEntities() { // This method will connect with repositorie of GET
        return await this.entityRepository.findAll(); 
    }

    async getEntitiesById(id: number) { // This method will connect with repositorie of GET by ID
        return await this.entityRepository.findById(id);
    }

    async createEntities(entity: Partial<Entity>) { // This method will connect with repositorie of POST with entity type
        return await this.entityRepository.create(entity);
    }

    async updateEntities(id: number, entity: Partial<Entity>) { // This method will connect with repositorie of UPDATE with entity type
        return await this.entityRepository.update(id, entity);
    }

    async deleteEntities(id: number) { // This method will connect with repositorie of DELETE
        return await this.entityRepository.deleteById(id);
    }
}