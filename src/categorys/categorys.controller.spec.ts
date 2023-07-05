import { Test, TestingModule } from '@nestjs/testing';
import { CategorisController } from './categorys.controller';
import { CategorisService } from './categorys.service';

describe('CategorisController', () => {
  let controller: CategorisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategorisController],
      providers: [CategorisService],
    }).compile();

    controller = module.get<CategorisController>(CategorisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
