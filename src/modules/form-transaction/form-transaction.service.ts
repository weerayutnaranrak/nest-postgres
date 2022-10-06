import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import LeadEntity from '../lead/lead.entity';
import ProductEntity from '../product/product.entity';
import { CreateFormTransactionDto } from './dto/create-form-transaction.dto';
import { UpdateFormTransactionDto } from './dto/update-form-transaction.dto';
import FormTransactionEntity from './form-transaction.entity';

@Injectable()
export class FormTransactionService {
  constructor(
    @InjectRepository(FormTransactionEntity)
    private formTransactionRepo: Repository<FormTransactionEntity>,
    @InjectRepository(LeadEntity)
    private leadRepo: Repository<LeadEntity>,
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
  ) {}

  async create(createFormTransactionDto: CreateFormTransactionDto) {
    const lead = await this.leadRepo.findOne(createFormTransactionDto.lead_id);
    const product = await this.productRepo.findOne(
      createFormTransactionDto.product_id,
    );
    const form = new FormTransactionEntity();
    (form.lead = lead), (form.product = product);
    const formTransaction = await this.formTransactionRepo.save(form);
    return formTransaction;
  }

  async findAll(limit = 10) {
    const formTransaction = await this.formTransactionRepo.find({
      relations: ['lead', 'product'],
      take: limit,
    });
    return formTransaction;
  }

  async findOne(id: string) {
    const formTransaction = await this.formTransactionRepo.findOne(id, {
      relations: ['lead', 'product'],
    });
    return formTransaction;
  }

  async update(id: string, updateformTransactionDto: UpdateFormTransactionDto) {
    const lead = await this.leadRepo.findOne(updateformTransactionDto.lead_id);
    const product = await this.productRepo.findOne(
      updateformTransactionDto.product_id,
    );
    const formTransaction = await this.formTransactionRepo.update(id, {
      product,
      lead,
    });
    return formTransaction;
  }

  async remove(id: string) {
    const formTransaction = await this.formTransactionRepo.delete(id);
    return formTransaction;
  }
}
