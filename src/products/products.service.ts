import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ErrorFilter } from 'src/utils/errorManager';
import { Category } from 'src/categorys/entities/categorys.entity';
import { States } from 'src/states-products/entities/states-product.entity';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(States)
    private stateRepository: Repository<States>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const product = new Product();
      console.log('llega', createProductDto);

      product.sku = createProductDto.sku;
      product.nombre_producto = createProductDto.nombre_producto;
      product.descripcion = createProductDto.descripcion;
      product.precio = createProductDto.precio;

      // Obtener el ID de la categoría por el nombre
      const categoria = await this.categoryRepository.findOne({
        where: {
          nombre_categoria: createProductDto.nombre_categoria,
        },
      });
      product.id_categoria = categoria.id;

      // Obtener el ID del estado por el nombre
      const estado = await this.stateRepository.findOne({
        where: { nombre_estado: createProductDto.nombre_estado },
      });
      product.id_estado = estado.id;
      console.log(categoria, estado);

      return await this.productRepository.save(product);
    } catch (error) {
      return new ErrorFilter();
    }
  }
  async findAll() {
    try {
      const products = await this.productRepository.find();

      const result = products;
      console.log(result);

      return result;
    } catch (error) {
      return new ErrorFilter();
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.productRepository.find();
      console.log(data);
      return data;
    } catch (error) {
      return new ErrorFilter();
    }
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    try {
      return `This action returns a #${id} product`;
    } catch (error) {
      return new ErrorFilter();
    }
  }

  remove(id: number) {
    try {
      return `This action returns a #${id} product`;
    } catch (error) {
      return new ErrorFilter();
    }
  }
}
