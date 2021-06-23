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
  totalCheckoutAmount: number = 0;
  constructor(private cartService: CartService) { 
    this.onCartItemChanged$ = this.cartService.onCartChanged$
    .subscribe(value => this.cartItemCounter = value);

    
  }

  ngOnInit(): void {
    this.getCartItems();
    
  }


  getCartItems(){
    this.cartItems = this.cartService.getCartProduct().map(item => new Cart(item));
    this.getTotal();
  }


  


  updateQty(id: string , mode: string){
    
    
    this.cartItems.forEach(item => {
      if(item.product.id === id){
        const qty = item.quantity;
        
        item.quantity = mode === 'sub' ? qty-1 : qty + 1;
        item.price = item.quantity * item.product.price;
      }
    });
    this.cartItems = this.cartItems.filter(item => item.quantity !== 0 );
    this.getTotal();
  }


  getTotal(): void{
    const dd = this.cartItems.map(item => item.price);
    this.totalCheckoutAmount = dd.reduce((item,acc) => item+acc);
  }

}
