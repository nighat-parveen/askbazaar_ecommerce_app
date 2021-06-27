import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  onCartChanged$: BehaviorSubject<number> = new BehaviorSubject(0);
  cartData$: Product[] = [];
  constructor() {}

  setValue(productItem: Product) {
    if (this.cartData$.filter((item) => item.id === productItem.id).length) {
      console.log('diplay Error Message');
      alert('already in cart');
      return;
    }
    this.cartData$ = [...this.cartData$, productItem];
    this.onCartChanged$.next(this.onCartChanged$.getValue() + 1);
  }

  getCartProduct() {
    return [...this.cartData$];
  }
}
