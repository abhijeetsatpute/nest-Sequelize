import { Table, Column, Model, DataType, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { UserType } from './user.type.entity';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    age: number;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    zip: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    user_type_id: string;

    @Column({
        type: DataType.ENUM,
        values: [
            'guitar', 'comedy', 'reading', 
            'cooking', 'dinner parties', 
            'cycling', 'video games', 'karoke', 
            'fashion', 'craft beer', 'wellness', 
            'cosplaying'
        ],
        allowNull: false,
    })
    interests: string;


}