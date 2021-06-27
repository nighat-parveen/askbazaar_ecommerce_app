import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import productData from '../../server/products/product.metadata';
import { Observable } from 'rxjs';
import categoryData from '../../server/categories/categories.metaData';
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  getProductByCategoryType(type: string) {
    if (type === 'all') return productData;
    return productData.filter((item) => item.category === type);
  }

  getCategories() {
    return categoryData;
  }
}
