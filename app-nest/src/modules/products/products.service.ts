import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { IProducts } from 'src/interfaces';

@Injectable()
export class ProductsService {
  private products: IProducts[] = [
    { id: 1, name: 'Laptop', description: 'Computador portátil', price: 500000 },
    { id: 2, name: 'Mouse', description: 'Mouse inalámbrico', price: 150000 },
  ];

  findAll(): IProducts[] {
    return this.products;
  }

  findOne(id: number): IProducts {
    const product = this.products.find((p) => p.id === id);
    if (!product) throw new NotFoundException('Producto no encontrado');
    return product;
  }

  create(product: Omit<IProducts, 'id'>): IProducts {
    if (product.price <= 0) {
      throw new BadRequestException('El precio debe ser mayor que 0');
    }

    const newId =
      this.products.length > 0
        ? this.products[this.products.length - 1].id + 1
        : 1;

    const newProduct: IProducts = { id: newId, ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, productData: Omit<IProducts, 'id'>): IProducts {
    const product = this.findOne(id);
    Object.assign(product, productData);
    return product;
  }

  remove(id: number) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) throw new NotFoundException('Producto no encontrado');
    this.products.splice(index, 1);
    return { delete: true };
  }
}