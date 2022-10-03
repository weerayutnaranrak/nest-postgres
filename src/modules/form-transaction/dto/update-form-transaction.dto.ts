import { PartialType } from '@nestjs/swagger';
import { CreateFormTransactionDto } from './create-form-transaction.dto';

export class UpdateFormTransactionDto extends PartialType(
  CreateFormTransactionDto,
) {}
