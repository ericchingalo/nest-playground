import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/';

@Controller('products')
export class ProductsController {
  @Get()
  findAllProducts(): string {
    return 'this returns all products';
  }

  @Get(':id')
  findProductById(@Param('id') id: number): string {
    return `this returns a product with ${id} id`;
  }

  @Post()
  createProduct(@Body() productDto: CreateProductDto): string {
    return `created product with id ${productDto.id}`;
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() productDto: UpdateProductDto,
  ): string {
    return `created product with id ${productDto.name}`;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): string {
    return `deleted product with ${id} id`;
  }
}
