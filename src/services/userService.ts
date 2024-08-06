import UserRepository from '../repositories/userRepository';
import { injectable, inject } from 'tsyringe';
import { User } from "../models/user";

@injectable()
export default class UserService { // this class will receive params and / or body from controllers call and will insert it into repositories to call sequelize methods
    constructor(@inject(UserRepository) private userRepository: UserRepository) {}

    async getAllUsers() { // This method will connect with repositorie of GET
        return await this.userRepository.findAll(); 
    }

    async getUsersById(id: number) { // This method will connect with repositorie of GET by ID
        return await this.userRepository.findById(id);
    }

    async getUserByEmail(email: string): Promise<User | null> {
        return await this.userRepository.findByEmail(email);
      }

    async createUsers(user: Partial<User>) { // This method will connect with repositorie of POST with user type
        console.log(2);
        return await this.userRepository.create(user);
    }

    async updateUsers(id: number, user: Partial<User>) { // This method will connect with repositorie of UPDATE with user type
        return await this.userRepository.update(id, user);
    }

    async deleteUsers(id: number) { // This method will connect with repositorie of DELETE
        return await this.userRepository.deleteById(id);
    }

    async checkUserCredentials(
        email: string,
        password: string
      ): Promise<User> {
        const user = await this.getUserByEmail(email);
        if (user && user.password === password) {
          return user;
        }
        throw new Error("Invalid credentials");
      }
}