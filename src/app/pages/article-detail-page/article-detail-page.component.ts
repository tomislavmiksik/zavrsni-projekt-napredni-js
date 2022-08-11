import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article-services/article.service';

@Component({
  selector: 'app-article-detail-page',
  templateUrl: './article-detail-page.component.html',
  styleUrls: ['./article-detail-page.component.scss']
})
export class ArticleDetailPageComponent implements OnInit {

  articleId!: string;

  constructor(private route:ActivatedRoute, private article: ArticleService) { }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.params['articleId'];


  }

}
