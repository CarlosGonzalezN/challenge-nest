import { States } from 'src/states-products/entities/states-product.entity';
import { Category } from 'src/categorys/entities/categorys.entity';
export class CreateProductDto {
  sku: string;
  id_categoria: number;
  nombre_producto: string;
  descripcion: string;
  precio: number;
  id_estado: number;

  nombre_estado: string;
  nombre_categoria: string;
}
