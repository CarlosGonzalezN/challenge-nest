import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categorias' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_categoria: string;
}
