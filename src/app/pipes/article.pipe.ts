import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/article';

@Pipe({
  name: 'article',
})
export class ArticlePipe implements PipeTransform {
  transform(value: Article[], ...args: unknown[]): string {
    let val = value.map((article) => article.name).join(', ');

    return val;
  }
}
