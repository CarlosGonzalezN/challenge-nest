import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { States } from './entities/states-product.entity';
@Injectable()
export class StatesProductsService {
  constructor(
    @InjectRepository(States)
    private statesProducts: Repository<States>,
  ) {}

  async findAll() {
    const data = await this.statesProducts.find();
    console.log(data);

    return data;
  }
}
