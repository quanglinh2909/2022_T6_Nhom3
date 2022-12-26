import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
@Entity({ name: 'area_dim' })
export class AreaDimEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ name: 'Key', type: 'nvarchar', length: 255, nullable: true, default: null })
    key: string;

    @Column({ name: 'Name', type: 'nvarchar', length: 255, nullable: true, default: null })
    name: string;

    @Column({ name: 'dayexpiration_date' })
    dayexpirationDate: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @CreateDateColumn({ name: 'created_at' })
    createAt: Date;
}
