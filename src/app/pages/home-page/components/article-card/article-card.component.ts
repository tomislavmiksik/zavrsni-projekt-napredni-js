import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { CartService } from 'src/app/services/cart-services/cart.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input() article!: Article;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.article);

    console.log(this.cartService.getCart());
  }
}
