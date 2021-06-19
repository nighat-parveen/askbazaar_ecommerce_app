import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/core/services/config.service';
import { Product } from './../../../core/models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  // styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: Product[] = [];


  constructor(private router: ActivatedRoute,
              private configService: ConfigService ) { 
    this.router.params.subscribe(data => {
      // console.log(data.id);
      this.getProductList(data.id);
    });
   
  }

  ngOnInit(): void {
  }

  getProductList(categoryType = 'all') {
      const data = this.configService.getProductByCategoryType(categoryType);
      this.productList = data.map(item => new Product(item));
      console.log(this.productList);
    
  }

}
