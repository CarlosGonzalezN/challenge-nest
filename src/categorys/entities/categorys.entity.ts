import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity({ name: 'categorias' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_categoria: string;

  @OneToMany(() => Product, (product) => product.id_categoria)
  productos: Product[];
}
