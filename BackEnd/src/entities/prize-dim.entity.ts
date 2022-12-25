import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
@Entity({ name: 'prize_dim' })
export class PrizeDimEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'nvarchar', length: 255 })
    name: string;

    @UpdateDateColumn()
    updateAt: Date;

    @Column({ name: 'dayexpiration_date' })
    dayexpirationDate: Date;

    @Column({ type: 'int' })
    stt: number;

    @CreateDateColumn({ name: 'created_at' })
    createAt: Date;
}
