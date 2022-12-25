import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
@Entity({ name: 'province_dim' })
export class ProvinceDimEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'nvarchar', length: 255 })
    name: string;

    @UpdateDateColumn()
    updateAt: Date;

    @Column({ name: 'dayexpiration_date'})
    dayexpirationDate: Date;

    @CreateDateColumn({ name: 'created_at' })
    createAt: Date;
}
