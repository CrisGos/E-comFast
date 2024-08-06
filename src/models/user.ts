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
import { Role } from './role'
import { Cart } from './cart'
import { Order } from './order';


@Table({//here we deterimine the tableName and timestamp
    tableName:"users",
    timestamps:true,
})
export class User extends Model { // This class will extend from Model it'll allow us to use somo parameters
    @PrimaryKey // We use decorators to define PK, Autoincrement, Columns and relation between entities
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING(200),
        allowNull: false,
    })
    email!: string;

    @Column({
        type: DataType.STRING(200),
        allowNull: false,
    })
    password!: string;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    roleId!: number;

    @BelongsTo(() => Role)
    role!: Role;

    @HasMany(() => Cart)
    cart!: Cart[];

    @HasMany(() => Order)
    order!: Order[];
}