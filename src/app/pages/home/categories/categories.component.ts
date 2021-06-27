import { ConfigService } from 'src/app/core/services/config.service';
import { Category } from './../../../core/models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {
  public categories: Category[] = [];
  constructor(private configService: ConfigService ) { }

  ngOnInit(): void {
    this.getCategoryList();
  }


  getCategoryList(){
    this.categories = this.configService.getCategories().map(item => new Category(item));
  }

}
