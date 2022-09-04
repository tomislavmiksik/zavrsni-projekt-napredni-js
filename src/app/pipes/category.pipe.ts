import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/article';
import { Category } from '../models/category';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: Article, arg1: Category[]): string {
    let category = arg1.find((category) => category.id === value.categoryId);
    return category?.name ?? 'N/A';
  }
}
