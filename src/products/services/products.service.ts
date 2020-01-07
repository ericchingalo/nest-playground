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
    const index = _.findIndex(
      this.products,
      (prod: Product) => prod.id === productId,
    );

    let updatedProduct = this.products[index];

    if (!updatedProduct) {
      throw new NotFoundException('Product Not found');
    }
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
    // const foundProduct = _.find(
    //   this.products,
    //   (product: Product) => product.id === id,
    // );

    const foundProduct = this.products.find(prod => prod.id === id);

    if (!foundProduct) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return foundProduct;
  }

  getId(): number {
    return this.products.length + 1;
  }
}
