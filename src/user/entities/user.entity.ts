import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, Generated } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  phone: string

  @Column()
  password: string

  @PrimaryGeneratedColumn('uuid')
  uuid: string

  // @Timestamp()
  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date
  // @Column()
  // code:string
}
