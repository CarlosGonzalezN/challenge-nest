import { Controller, Get } from '@nestjs/common';
import { StatesProductsService } from './states-products.service';

@Controller('states-products')
export class StatesProductsController {
  constructor(private readonly statesProductsService: StatesProductsService) {}

  @Get()
  findAll() {
    return this.statesProductsService.findAll();
  }
}
