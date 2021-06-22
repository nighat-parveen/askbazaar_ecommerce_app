import { Cart } from './../../../core/models/cart.model';
import { CartService } from './../../../core/services/cart.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  onCartItemChanged$: Subscription;
  cartItemCounter: number = 0;
  totalCheckoutAmount: number = 0.0;
  constructor(private cartService: CartService) { 
    this.onCartItemChanged$ = this.cartService.onCartChanged$
    .subscribe(value => this.cartItemCounter = value);

    
  }

  ngOnInit(): void {
    this.getCartItems();
    
  }


  getCartItems(){
    this.cartItems = this.cartService.getCartProduct().map(item => new Cart(item));
  }


  // getTotal(): number{
  //   this.totalCheckoutAmount = this.cartItems.reduce(item => item.price);
  //   return 0;
  // }


  updateQty(id: string , mode: string){
    
  }

}
