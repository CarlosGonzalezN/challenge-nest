import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatesProductsService } from './states-products.service';
import { CreateStatesProductDto } from './dto/create-states-product.dto';
import { UpdateStatesProductDto } from './dto/update-states-product.dto';

@Controller('states-products')
export class StatesProductsController {
  constructor(private readonly statesProductsService: StatesProductsService) {}

  @Post()
  create(@Body() createStatesProductDto: CreateStatesProductDto) {
    return this.statesProductsService.create(createStatesProductDto);
  }

  @Get()
  findAll() {
    return this.statesProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statesProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatesProductDto: UpdateStatesProductDto) {
    return this.statesProductsService.update(+id, updateStatesProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statesProductsService.remove(+id);
  }
}
