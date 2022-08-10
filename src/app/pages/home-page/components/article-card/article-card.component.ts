import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input() article: Article;

  constructor() {
    this.article = {
      id: '',
      name: '',
      categoryId: '',
      cost: 0,
      imageUrl: '',
    };
  }

  ngOnInit(): void {}
}
