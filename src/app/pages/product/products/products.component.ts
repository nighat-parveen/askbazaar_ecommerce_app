import { CartService } from './../../../core/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/core/services/config.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  public productList: Product[] = [];

  constructor(
    private router: ActivatedRoute,
    private configService: ConfigService,
    private cartService: CartService
  ) {
    this.router.params.subscribe((data) => {
      this.getProductList(data.id);
    });
  }

  ngOnInit(): void {}

  getProductList(categoryType = 'all') {
    const data = this.configService.getProductByCategoryType(categoryType);
    this.productList = data.map((item) => new Product(item));
  }

  updateCart(item: Product) {
    this.cartService.setValue(item);
  }
}
