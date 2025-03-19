import { Test, TestingModule } from '@nestjs/testing';
import { ServicService } from './college-info.service';

describe('ServicService', () => {
  let service: ServicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicService],
    }).compile();

    service = module.get<ServicService>(ServicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
