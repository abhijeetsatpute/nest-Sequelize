import { Table, Column, Model, DataType, BelongsTo, HasOne } from 'sequelize-typescript';

@Table
export class UserType extends Model<UserType> {
    @Column({
        type: DataType.ENUM,
        values: ['member', 'partner'],
        allowNull: false,
    })
    name: string;
}