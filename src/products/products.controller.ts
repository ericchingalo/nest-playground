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
import { ProductsService } from './services/products.service';
import { Product } from './interfaces/products.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAllProducts(): Product[] {
    return this.productsService.findAllProducts();
  }

  @Get(':id')
  findProductById(@Param('id') id: number): Product {
    return this.productsService.findProduct(id);
  }

  @Post()
  createProduct(@Body() productDto: CreateProductDto): Product {
    return this.productsService.createProduct(productDto);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: number,
    @Body() productDto: UpdateProductDto,
  ): Product {
    return this.productsService.updateProduct(id, productDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): number {
    return this.productsService.deleteProduct(id);
  }
}
