import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';
import { ArticleService } from 'src/app/services/article-services/article.service';
import { CategoriesService } from 'src/app/services/categories-service/categories.service';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss'],
})
export class ArticlesPageComponent implements OnInit {
  articles: Article[] = [];
  categories: Category[] = [];
  constructor(
    private articleService: ArticleService,
    private categoryService: CategoriesService
  ) {
  }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((articles) => {
      this.articles = articles;
    });

    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    console.log(this.articles);
    console.log(this.categories);

  }
}
