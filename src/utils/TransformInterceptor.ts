import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../categorys/entities/categorys.entity';
import { States } from '../states-products/entities/states-product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(States)
    private stateRepository: Repository<States>,
  ) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const createProductDto = request.body;

    // Obtener el ID de la categoría por el nombre
    const categoria = await this.categoryRepository.findOne({
      where: { nombre_categoria: createProductDto.nombre_categoria },
    });

    // Obtener el ID del estado por el nombre
    const estado = await this.stateRepository.findOne({
      where: { nombre_estado: createProductDto.nombre_estado },
    });

    // Actualizar los IDs en el objeto de creación del producto
    createProductDto.id_categoria = categoria?.id;
    createProductDto.id_estado = estado?.id;

    return next.handle().pipe(
      map((data) => {
        // Realizar cualquier transformación adicional en la respuesta si es necesario
        return data;
      }),
    );
  }
}
