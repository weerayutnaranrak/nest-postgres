import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  JoinColumn,
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
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne((type) => LeadEntity, {
    cascade: true,
  })
  @JoinColumn({ name: 'lead_id' })
  lead: LeadEntity;
}
export default FormTransationEntity;
