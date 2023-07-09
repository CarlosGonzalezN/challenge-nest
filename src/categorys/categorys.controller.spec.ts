import { Test } from '@nestjs/testing';
import { CategorysController } from './categorys.controller';
import { CategorysService } from './categorys.service';

describe('CategorysController', () => {
  let controller: CategorysController;
  let service: CategorysService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CategorysController],
      providers: [
        {
          provide: CategorysService,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<CategorysController>(CategorysController);
    service = moduleRef.get<CategorysService>(CategorysService);
  });

  describe('findAll', () => {
    it('should call findAll method of the service', async () => {
      const findAllSpy = jest.spyOn(service, 'findAll');

      await controller.findAll();

      expect(findAllSpy).toHaveBeenCalled();
    });
  });
});
