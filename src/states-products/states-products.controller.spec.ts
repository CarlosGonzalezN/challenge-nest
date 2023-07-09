import { Test } from '@nestjs/testing';
import { StatesProductsController } from './states-products.controller';
import { StatesProductsService } from './states-products.service';

describe('StatesProductsController', () => {
  let controller: StatesProductsController;
  let service: StatesProductsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [StatesProductsController],
      providers: [
        {
          provide: StatesProductsService,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<StatesProductsController>(
      StatesProductsController,
    );
    service = moduleRef.get<StatesProductsService>(StatesProductsService);
  });

  describe('findAll', () => {
    it('should call findAll method of the service', async () => {
      const findAllSpy = jest.spyOn(service, 'findAll');

      await controller.findAll();

      expect(findAllSpy).toHaveBeenCalled();
    });
  });
});
