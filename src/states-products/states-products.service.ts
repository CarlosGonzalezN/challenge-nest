import { Injectable } from '@nestjs/common';
import { CreateStatesProductDto } from './dto/create-states-product.dto';
import { UpdateStatesProductDto } from './dto/update-states-product.dto';

@Injectable()
export class StatesProductsService {
  create(createStatesProductDto: CreateStatesProductDto) {
    return 'This action adds a new statesProduct';
  }

  findAll() {
    return `This action returns all statesProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} statesProduct`;
  }

  update(id: number, updateStatesProductDto: UpdateStatesProductDto) {
    return `This action updates a #${id} statesProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} statesProduct`;
  }
}
