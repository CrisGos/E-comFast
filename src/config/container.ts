import { container } from 'tsyringe'; // to allow us to use the container
import ProductService from '../services/productService';
import ProductRepository from '../repositories/productRepository';
import UserService from '../services/userService';
import UserRepository from '../repositories/userRepository';
 // here we call the single instance of determined class after being imported
container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductService>(ProductService);

container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);