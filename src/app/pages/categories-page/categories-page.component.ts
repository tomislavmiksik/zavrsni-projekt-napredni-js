import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ArticleService } from 'src/app/services/article-services/article.service';
import { CategoriesService } from 'src/app/services/categories-service/categories.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
