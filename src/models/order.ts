import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    BelongsTo,
    ForeignKey,
} from "sequelize-typescript";
import { ProductCart } from './productCart';


@Table({//here we deterimine the tableName and timestamp
    tableName:"orders",
    timestamps:true,
})
export class Order extends Model { // This class will extend from Model it'll allow us to use somo parameters
    @PrimaryKey // We use decorators to define PK, Autoincrement, Columns and relation between entities
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    total!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @ForeignKey(() => ProductCart)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    productCartId!: number;

    @BelongsTo(() => ProductCart)
    productCart!: ProductCart;
}