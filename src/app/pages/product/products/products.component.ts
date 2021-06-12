import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  data: any;
  constructor(private router: ActivatedRoute ) { 
   this.router.params.subscribe(data => this.data = data.id)
   console.log(this.data);
  }

  ngOnInit(): void {
  }

}
