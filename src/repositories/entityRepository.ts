import { injectable } from 'tsyringe';
import { Entity } from '../models/entity';

@injectable()
export default class EntityRepository { // here we created the Repository, this class will receive the information will call the sequelize methods needed
    async findAll() { // this method will call findAll from sequelize
        return await Entity.findAll();
    }

    async findById(id: number) { // this method will call findByPk from sequelize
        return await Entity.findByPk(id);
    }

    async create(entity: Partial<Entity>) { // this method will call create from sequelize
        return await Entity.create(entity);
    }

    async update(id: number, entity: Partial<Entity>) { // this method will call findByPk and update from sequelize
        const existingEntity = await Entity.findByPk(id);
        if (existingEntity) {
            return await existingEntity.update(entity);
        }
        throw new Error('Entity not found');
    }

    async deleteById(id: number) { // this method will call findByPk and destroy from sequelize
        const entity = await Entity.findByPk(id);
        if (entity) {
            await entity.destroy();
            return;
        }
        throw new Error('Entity not found');
    }
}