import { Injectable, NotFoundException } from '@nestjs/common';
import * as _ from 'lodash';
import { Product } from '../interfaces/products.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  createProduct(product: Product): Product {
    if (product) {
      const createdProduct: Product = {
        ...product,
        id: this.getId(),
      };
      this.products.push(createdProduct);
      return createdProduct;
    }
  }

  deleteProduct(id: number): number {
    _.remove(this.products, (product: Product) => product.id === id);
    return id;
  }

  updateProduct(productId: number, productUpdate: Product): Product {
    const index = this.getProductIndex(productId);
    let updatedProduct = this.products[index];

    if (productUpdate.name) {
      updatedProduct = { ...updatedProduct, name: productUpdate.name };
    }
    if (productUpdate.price) {
      updatedProduct = { ...updatedProduct, price: productUpdate.price };
    }

    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  findAllProducts(): Product[] {
    return this.products;
  }

  findProduct(id: number): Product {
    const index = this.getProductIndex(id);
    return this.products[index];
  }

  getProductIndex(id: number): number {
    const productIndex = _.findIndex(
      this.products,
      (prod: Product) => prod.id === id,
    );

    if (productIndex !== -1) {
      return productIndex;
    }

    throw new NotFoundException(`product with id ${id} not found`);
  }

  getId(): number {
    return this.products.length + 1;
  }
}
