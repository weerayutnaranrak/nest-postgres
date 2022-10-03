import { IsNotEmpty } from 'class-validator';

export class CreateFormTransactionDto {
  @IsNotEmpty()
  product_id: string;

  @IsNotEmpty()
  lead_id: string;
}
