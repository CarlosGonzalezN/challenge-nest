import { Test } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<ProductsController>(ProductsController);
    service = moduleRef.get<ProductsService>(ProductsService);
  });

  describe('findAll', () => {
    it('should call findAll method of the service', async () => {
      const findAllSpy = jest.spyOn(service, 'findAll');

      await controller.findAll();

      expect(findAllSpy).toHaveBeenCalled();
    });
  });
});
