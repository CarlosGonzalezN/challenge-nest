import { Injectable } from '@nestjs/common';
import { CreateStatesProductDto } from './dto/create-states-product.dto';
import { UpdateStatesProductDto } from './dto/update-states-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { States } from './entities/states-product.entity';
@Injectable()
export class StatesProductsService {
  constructor(
    @InjectRepository(States)
    private statesProducts: Repository<States>,
  ) {}

  create(_createStatesProductDto: CreateStatesProductDto) {
    return 'This action adds a new statesProduct';
  }

  async findAll() {
    return await this.statesProducts.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} statesProduct`;
  }

  update(id: number, _updateStatesProductDto: UpdateStatesProductDto) {
    return `This action updates a #${id} statesProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} statesProduct`;
  }
}
