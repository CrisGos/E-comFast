import { container } from 'tsyringe'; // to allow us to use the container
import ProductService from '../services/productService';
import ProductRepository from '../repositories/productRepository';
import UserService from '../services/userService';
import UserRepository from '../repositories/userRepository';
import OrderService from '../services/orderService';
import OrderRepository from '../repositories/orderRepository';
import CartService from '../services/cartService';
import CartRepository from '../repositories/cartRepository';
import ProductCartService from '../services/productCartService';
import ProductCartRepository from '../repositories/productCartRepository';
import EntityService from '../services/entityService';
import EntityRepository from '../repositories/entityRepository';
import PermissionService from '../services/permissionService';
import PermissionRepository from '../repositories/permissionRepository';
 // here we call the single instance of determined class after being imported

container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductService>(ProductService);

container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);

container.registerSingleton<OrderRepository>(OrderRepository);
container.registerSingleton<OrderService>(OrderService);

container.registerSingleton<CartRepository>(CartRepository);
container.registerSingleton<CartService>(CartService);

container.registerSingleton<ProductCartRepository>(ProductCartRepository);
container.registerSingleton<ProductCartService>(ProductCartService);

container.registerSingleton<EntityRepository>(EntityRepository);
container.registerSingleton<EntityService>(EntityService);

container.registerSingleton<PermissionRepository>(PermissionRepository);
container.registerSingleton<PermissionService>(PermissionService);