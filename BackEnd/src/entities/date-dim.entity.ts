import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'date_dim' })
export class DateDimEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'date' })
    date: Date;
}
