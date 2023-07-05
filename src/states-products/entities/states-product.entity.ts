import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'estado' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_estado: string;
}
