import { IsString, IsInt } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly price: number;
}
