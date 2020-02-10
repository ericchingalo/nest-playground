import { IsString, IsInt } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly price: number;
}
