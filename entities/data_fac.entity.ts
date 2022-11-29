import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { AreaDimEntity } from './area-dim.entity';
import { DateDimEntity } from './date-dim.entity';
import { PrizeDimEntity } from './prize-dim.entity';
import { ProvinceDimEntity } from './province-dim.entity';
@Entity({ name: 'data_fac' })
export class DataFacEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @UpdateDateColumn()
    updateAt: Date;

    @Column({ type: 'nvarchar', length: 255 })
    value: string;

    @ManyToOne(() => DateDimEntity, (dateDim) => dateDim.id)
    @JoinColumn({ name: 'idDate' })
    dateDim: DateDimEntity;

    @ManyToOne(() => AreaDimEntity, (areaDim) => areaDim.id)
    @JoinColumn({ name: 'idArea' })
    areaDim: AreaDimEntity;

    @ManyToOne(() => ProvinceDimEntity, (provinceDim) => provinceDim.id)
    @JoinColumn({ name: 'idProvince' })
    provinceDim: ProvinceDimEntity;

    @ManyToOne(() => PrizeDimEntity, (prizeDim) => prizeDim.id)
    @JoinColumn({ name: 'idPrize' })
    prizeDim: PrizeDimEntity;

    @Column({ type: 'nvarchar', length: 255 })
    result: string;

    @Column({ name: 'dayexpiration_date',default:'9999-12-31 00:00:00' })
    dayexpirationDate: Date;

    @CreateDateColumn({ name: 'created_at' })
    createAt: Date;
}
