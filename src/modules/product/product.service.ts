import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import ProductEntity from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productRepo.save(createProductDto);
    return product;
  }

  async findAll() {
    const product = await this.productRepo.find();
    return product;
  }

  async findOne(id: string) {
    const product = await this.productRepo.findOne(id);
    return product;
  }

  async update(id: string, updateproductDto: UpdateProductDto) {
    const product = await this.productRepo.update(id, updateproductDto);
    return product;
  }

  async remove(id: string) {
    const product = await this.productRepo.delete(id);
    return product;
  }
}
