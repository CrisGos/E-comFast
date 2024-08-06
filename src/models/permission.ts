import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";
import { Role } from './role';
import { Entity } from './entity';




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

    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER,
    })
    roleId!: number;

    @BelongsTo(() => Role)
    role!: Role;

    @ForeignKey(() => Entity)
    @Column({
        type: DataType.INTEGER,
    })
    entityId!: number;

    @BelongsTo(() => Entity)
    entity!: Entity;
}