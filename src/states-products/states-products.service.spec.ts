import { Test, TestingModule } from '@nestjs/testing';
import { StatesProductsService } from './states-products.service';

describe('StatesProductsService', () => {
  let service: StatesProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatesProductsService],
    }).compile();

    service = module.get<StatesProductsService>(StatesProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
