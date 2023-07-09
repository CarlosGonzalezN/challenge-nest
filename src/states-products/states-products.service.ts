import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { States } from './entities/states-product.entity';
import { ErrorFilter } from '../utils/errorManager';
@Injectable()
export class StatesProductsService {
  constructor(
    @InjectRepository(States)
    private statesProducts: Repository<States>,
  ) {}

  async findAll() {
    try {
      const data = await this.statesProducts.find();
      console.log(data);

      return data;
    } catch (error) {
      return new ErrorFilter();
    }
  }
}
