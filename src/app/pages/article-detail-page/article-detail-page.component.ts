import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';
import { ArticleService } from 'src/app/services/article-services/article.service';
import { CartService } from 'src/app/services/cart-services/cart.service';
import { CategoriesService } from 'src/app/services/categories-service/categories.service';

@Component({
  selector: 'app-article-detail-page',
  templateUrl: './article-detail-page.component.html',
  styleUrls: ['./article-detail-page.component.scss'],
})
export class ArticleDetailPageComponent implements OnInit {
  articleId!: string;
  article: Article = new Article('', '', 123, '', '', '');

  categories: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoriesService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.articleId = this.route.snapshot.params['articleId'];

    this.articleService.getArticles().subscribe((articles) => {
      this.article = articles.find((article) => article.id === this.articleId)!;
    });

    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  addToCart() {
    this.cartService.addToCart(this.article);

    console.log(this.cartService.getCart());
  }
}
