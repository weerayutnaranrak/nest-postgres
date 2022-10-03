import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('prosucts')
class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
export default ProductEntity;
