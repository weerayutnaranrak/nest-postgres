import { Test, TestingModule } from '@nestjs/testing';
import { Lead2Service } from './lead2.service';

describe('Lead2Service', () => {
  let service: Lead2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Lead2Service],
    }).compile();

    service = module.get<Lead2Service>(Lead2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
