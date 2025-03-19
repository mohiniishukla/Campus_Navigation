import { Test, TestingModule } from '@nestjs/testing';
import { CollegeInfoController } from './college-info.controller';

describe('CollegeInfoController', () => {
  let controller: CollegeInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollegeInfoController],
    }).compile();

    controller = module.get<CollegeInfoController>(CollegeInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
