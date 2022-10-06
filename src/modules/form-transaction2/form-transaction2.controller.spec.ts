import { Test, TestingModule } from '@nestjs/testing';
import { FormTransaction2Controller } from './form-transaction2.controller';
import { FormTransaction2Service } from './form-transaction2.service';

describe('FormTransaction2Controller', () => {
  let controller: FormTransaction2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormTransaction2Controller],
      providers: [FormTransaction2Service],
    }).compile();

    controller = module.get<FormTransaction2Controller>(
      FormTransaction2Controller,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
