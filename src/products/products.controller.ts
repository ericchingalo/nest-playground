import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/';
import { ProductsService } from './services/products.service';
import { Product } from './interfaces/products.interface';
import { HttpExceptionFilter } from 'src/core/filters/http-exception.filters';
import { CustomValidationPipe, ParseIntPipe } from 'src/core/pipes';

@Controller('products')
@UseFilters(new HttpExceptionFilter())
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAllProducts(): Product[] {
    return this.productsService.findAllProducts();
  }

  @Get(':id')
  findProductById(@Param('id', new ParseIntPipe()) id: number): Product {
    return this.productsService.findProduct(id);
  }

  @Post()
  createProduct(
    @Body(new CustomValidationPipe()) productDto: CreateProductDto,
  ): Product {
    return this.productsService.createProduct(productDto);
  }

  @Put(':id')
  @UsePipes()
  updateProduct(
    @Param('id', new ParseIntPipe()) id: number,
    @Body(new ValidationPipe({ transform: true })) productDto: UpdateProductDto,
  ): Product {
    return this.productsService.updateProduct(id, productDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id', new ParseIntPipe()) id): number {
    return this.productsService.deleteProduct(id);
  }
}
