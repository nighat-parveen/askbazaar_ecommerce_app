import { SidebarService } from '../sidenav/sidenav.service';
import { CartService } from './../../core/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  cartItemCounter: number = 0;
  onCartValueChanged$: Subscription;

  constructor(private cartService: CartService,
              private sidebarService: SidebarService) {
              this.onCartValueChanged$ = this.cartService.onCartChanged$
              .subscribe(value => this.cartItemCounter = value);
   }

  ngOnInit(): void {}

  

}
