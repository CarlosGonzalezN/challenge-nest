import { Test, TestingModule } from '@nestjs/testing';
import { StatesProductsController } from './states-products.controller';
import { StatesProductsService } from './states-products.service';

describe('StatesProductsController', () => {
  let controller: StatesProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatesProductsController],
      providers: [StatesProductsService],
    }).compile();

    controller = module.get<StatesProductsController>(StatesProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
