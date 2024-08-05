import { Sequelize } from "sequelize-typescript"; // this import will allow to use Sequelize 
// import { Product, User, Role, Cart, ProductCart, Order, Entities, Permissions } from '../models';
import { Product, User, Order, Cart, ProductCart, Entity } from '../models'; // importing the entities
import dotenv from 'dotenv'; // importing environment variables

dotenv.config(); // calling environment variables

const sequelize: Sequelize = new Sequelize({ // setting up the database
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [Product, User, Order, Cart, ProductCart, Entity]
})


export default sequelize;
