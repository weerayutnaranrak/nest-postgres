import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import LeadEntity from '../lead/lead.entity';
import ProductEntity from '../product/product.entity';

@Entity('form_transaction')
class FormTransationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => ProductEntity, {
    cascade: true,
  })
  @JoinTable()
  product: ProductEntity;

  @ManyToOne((type) => LeadEntity, {
    cascade: true,
  })
  lead: LeadEntity;
}
export default FormTransationEntity;
