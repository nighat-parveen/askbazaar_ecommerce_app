
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Cart } from 'src/app/core/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
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
    this.cartItems = this.cartService.getCartProduct().map(item => {
      const data = new Cart(item);
      data.price = data.product.price;
      return data;
    });
    this.getTotal();
  }


  


  updateQty(id: string , mode: string){
    
    
    this.cartItems.forEach(item => {
      if(item.product.id === id){
        const qty = item.quantity;
        
        item.quantity = mode === 'sub' ? qty-1 : qty + 1;
        
      }
      item.price = item.quantity * item.product.price;
    });
    this.cartItems = this.cartItems.filter(item => item.quantity !== 0 );
    this.getTotal();
  }


  getTotal(): void{
    
    let count = 0;
    this.cartItems.forEach(item => {
      count = item.price + count;
    });
    this.totalCheckoutAmount = count;
    

  }

}
