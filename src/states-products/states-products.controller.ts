import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StatesProductsService } from './states-products.service';
import { CreateStatesProductDto } from './dto/create-states-product.dto';
import { UpdateStatesProductDto } from './dto/update-states-product.dto';

@Controller('states-products')
export class StatesProductsController {
  constructor(private readonly statesProductsService: StatesProductsService) {}

  @Get()
  findAll() {
    return this.statesProductsService.findAll();
  }
}
