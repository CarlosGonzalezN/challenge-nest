import { Controller, Get } from '@nestjs/common';
import { CategorysService } from './categorys.service';

@Controller('categorys')
export class CategorysController {
  constructor(private readonly categorysService: CategorysService) {}

  @Get()
  findAll() {
    return this.categorysService.findAll();
  }
}
