import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    BelongsTo,
    ForeignKey,
    HasMany,
} from "sequelize-typescript";
import { User } from './user';
import { ProductCart } from './productCart';


@Table({//here we deterimine the tableName and timestamp
    tableName:"carts",
    timestamps:true,
})
export class Cart extends Model { // This class will extend from Model it'll allow us to use somo parameters
    @PrimaryKey // We use decorators to define PK, Autoincrement, Columns and relation between entities
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @BelongsTo(() => User)
    user!: number;

    @HasMany(() => ProductCart)
    productCart!: ProductCart[];
}