import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../../categorys/entities/categorys.entity';
import { States } from '../../states-products/entities/states-product.entity';

@Entity({ name: 'productos' })
export class Product {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sku: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'id_categoria' })
  id_categoria: Category['id'];

  @Column()
  nombre_producto: string;

  @Column('text')
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @ManyToOne(() => States)
  @JoinColumn({ name: 'id_estado' })
  id_estado: number;

  nombre_estado: string;
  nombre_categoria: string;
  estado: any;
}
