import { ApiProperty } from '@nestjs/swagger';

export class QueryFormTransactionDto {
  @ApiProperty()
  limit: number;
}
