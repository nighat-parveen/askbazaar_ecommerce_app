import { Product } from './product.model';

export class Cart {
  product: Product;
  id: string;
  quantity: number;
  price: number;

  constructor(productData: Product) {
    this.product = productData || new Product();
    this.id = '';
    this.quantity = 1;
    this.price = 0;
  }
}
