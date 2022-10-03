import { Test, TestingModule } from '@nestjs/testing';
import { FormTransactionService } from './form-transaction.service';

describe('FormTransactionService', () => {
  let service: FormTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormTransactionService],
    }).compile();

    service = module.get<FormTransactionService>(FormTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
