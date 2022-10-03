import { IsNotEmpty } from 'class-validator';
import { LeadStatus } from 'src/constants/lead';

export class CreateLeadDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  status: LeadStatus;

  @IsNotEmpty()
  phone: string;
}
