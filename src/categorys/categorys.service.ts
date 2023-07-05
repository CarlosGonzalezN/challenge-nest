import { Injectable } from '@nestjs/common';
import { CreateCategorysDto } from './dto/create-categorys.dto';
import { UpdateCategorysDto } from './dto/update-categorys.dto';

@Injectable()
export class CategorysService {
  create(createCategorysDto: CreateCategorysDto) {
    return 'This action adds a new categorys';
  }

  findAll() {
    return `This action returns all categorys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categorys`;
  }

  update(id: number, updateCategorysDto: UpdateCategorysDto) {
    return `This action updates a #${id} categorys`;
  }

  remove(id: number) {
    return `This action removes a #${id} categorys`;
  }
}
