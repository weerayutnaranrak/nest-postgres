import { Test, TestingModule } from '@nestjs/testing';
import { Lead2Controller } from './lead2.controller';
import { Lead2Service } from './lead2.service';

describe('Lead2Controller', () => {
  let controller: Lead2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Lead2Controller],
      providers: [Lead2Service],
    }).compile();

    controller = module.get<Lead2Controller>(Lead2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
