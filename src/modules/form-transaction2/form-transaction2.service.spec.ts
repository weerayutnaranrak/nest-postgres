import { Test, TestingModule } from '@nestjs/testing';
import { FormTransaction2Service } from './form-transaction2.service';

describe('FormTransaction2Service', () => {
  let service: FormTransaction2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormTransaction2Service],
    }).compile();

    service = module.get<FormTransaction2Service>(FormTransaction2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
