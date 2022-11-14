/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm"
@Entity()
export class BannerEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'nvarchar' })
    linkImage: string

    @CreateDateColumn()
    createdAt: Date


}
//idCart,IdUser,IdProduct, amount,size,idColor