import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity({ name: 'estados' })
export class States {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_estado: string;

  @OneToMany(() => Product, (product) => product.id_estado)
  productos: Product[];
}
