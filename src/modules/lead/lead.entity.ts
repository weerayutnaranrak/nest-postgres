import { LeadStatus } from 'src/constants/lead';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('leads')
class LeadEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phone: string;

  @Column()
  status: LeadStatus;
}
export default LeadEntity;
