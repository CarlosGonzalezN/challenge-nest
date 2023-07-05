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

  @Post()
  create(@Body() createCategorysDto: CreateCategorysDto) {
    return this.categorysService.create(createCategorysDto);
  }

  @Get()
  findAll() {
    return this.categorysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categorysService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategorysDto: UpdateCategorysDto,
  ) {
    return this.categorysService.update(+id, updateCategorysDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categorysService.remove(+id);
  }
}
