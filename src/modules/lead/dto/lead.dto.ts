import { Expose } from 'class-transformer';

export class LeadDto {
  @Expose()
  firstName: string;
  @Expose()
  lastName: string;
}
