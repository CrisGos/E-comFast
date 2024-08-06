import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
} from "sequelize-typescript";
import { Order } from './order';


@Table({//here we deterimine the tableName and timestamp
    tableName:"productCarts",
    timestamps:true,
})
export class ProductCart extends Model { // This class will extend from Model it'll allow us to use somo parameters
    @PrimaryKey // We use decorators to define PK, Autoincrement, Columns and relation between entities
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    quantity!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    cardId!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    productId!: number;

    @HasMany(() => Order)
    order!: Order[];
}