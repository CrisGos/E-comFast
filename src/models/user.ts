import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
} from "sequelize-typescript";


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

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    roleId!: number;
}