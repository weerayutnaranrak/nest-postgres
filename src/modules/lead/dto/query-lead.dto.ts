import { ApiProperty } from '@nestjs/swagger';

export class QueryLeadDto {
  @ApiProperty()
  limit: number;
}
