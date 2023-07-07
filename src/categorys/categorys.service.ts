import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/categorys.entity';
import { ErrorFilter } from 'src/utils/errorManager';
@Injectable()
export class CategorysService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll() {
    try {
      const data = await this.categoryRepository.find();
      return data;
    } catch (error) {
      return new ErrorFilter();
    }
  }
}
