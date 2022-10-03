import { Test, TestingModule } from '@nestjs/testing';
import { FormTransactionController } from './form-transaction.controller';
import { FormTransactionService } from './form-transaction.service';

describe('FormTransactionController', () => {
  let controller: FormTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormTransactionController],
      providers: [FormTransactionService],
    }).compile();

    controller = module.get<FormTransactionController>(
      FormTransactionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
