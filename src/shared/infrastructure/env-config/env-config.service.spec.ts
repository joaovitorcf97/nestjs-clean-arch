import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigServiceTsService } from './env-config.service';

describe('EnvConfigServiceTsService', () => {
  let service: EnvConfigServiceTsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvConfigServiceTsService],
    }).compile();

    service = module.get<EnvConfigServiceTsService>(EnvConfigServiceTsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
