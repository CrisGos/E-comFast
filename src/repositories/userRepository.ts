import { injectable } from 'tsyringe';
import { User } from '../models/user';

@injectable()
export default class UserRepository { // here we created the Repository, this class will receive the information will call the sequelize methods needed
    async findAll() { // this method will call findAll from sequelize
        return await User.findAll();
    }

    async findById(id: number) { // this method will call findByPk from sequelize
        return await User.findByPk(id);
    }

    async findByEmail(email: string) { // class to authenticate an user
        return await User.findOne({ where: { email } });
    }

    async create(user: Partial<User>) { // this method will call create from sequelize
        return await User.create(user);
    }

    async update(id: number, user: Partial<User>) { // this method will call findByPk and update from sequelize
        const existingUser = await User.findByPk(id);
        if (existingUser) {
            return await existingUser.update(user);
        }
        throw new Error('User not found');
    }

    async deleteById(id: number) { // this method will call findByPk and destroy from sequelize
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            return;
        }
        throw new Error('User not found');
    }
}