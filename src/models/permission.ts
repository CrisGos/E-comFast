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
    tableName:"permissions",
    timestamps:true,
})
export class Permission extends Model { // This class will extend from Model it'll allow us to use somo parameters
    @PrimaryKey // We use decorators to define PK, Autoincrement, Columns and relation between entities
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    canCreate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    canUpdate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    canDelete!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    canGet!: boolean;

    @Column({
        type: DataType.INTEGER,
    })
    roleId!: number;

    @Column({
        type: DataType.INTEGER,
    })
    entityId!: number;
}