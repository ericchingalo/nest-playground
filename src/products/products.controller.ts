import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ProductDto } from './products.dto';

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
  create(@Body() productDto: ProductDto): string {
    return `created product with id ${productDto.id}`;
  }

  @Put()
  update(@Body() productDto: ProductDto): string {
    return `created product with id ${productDto.id}`;
  }
}
