import { LeadStatus } from 'src/constants/lead';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('leads')
class LeadEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column()
  phone: string;

  @Column()
  status: LeadStatus;
}
export default LeadEntity;
