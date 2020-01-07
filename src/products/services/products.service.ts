import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { Product } from '../interfaces/products.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  createProduct(product: Product): Product {
    const createdProduct: Product = {
      ...product,
      id: this.getId(),
    };
    this.products.push(createdProduct);
    return createdProduct;
  }

  deleteProduct(id: number): number {
    _.remove(this.products, (product: Product) => product.id === id);
    return id;
  }

  updateProduct(productId: number, productUpdate: Product): Product {
    const updatedProduct = {
      ...productUpdate,
      id: productId,
    };

    _.forEach(this.products, (product: Product) => {
      if (product.id === productId) {
        product = updatedProduct;
      }
    });

    return updatedProduct;
  }

  findAllProducts(): Product[] {
    return this.products;
  }

  findProduct(id: number): Product {
    return _.find(this.products, (product: Product) => product.id === id);
  }

  getId(): number {
    return this.products.length;
  }
}
