import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CreateCategorysDto } from './dto/create-categorys.dto';
import { UpdateCategorysDto } from './dto/update-categorys.dto';

@Controller('categorys')
export class CategorysController {
  constructor(private readonly categorysService: CategorysService) {}

  @Get()
  findAll() {
    return this.categorysService.findAll();
  }
}
