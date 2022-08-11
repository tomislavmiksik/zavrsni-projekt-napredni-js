import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoriesService } from '../categories-service/categories.service';
import { FirebaseUtilService } from '../../shared/firebase-util.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(
    private http: HttpClient,
    private firebaseUtil: FirebaseUtilService
  ) {
    this.init();
  }

  articles: any[] = [];

  articleSubject = new BehaviorSubject<any[]>(this.articles);

  init() {
    this.firebaseUtil.getArticles().subscribe((articles: any[]) => {
      this.articles = articles;
      this.articleSubject.next(this.articles);
    });
  }

  getArticles() {
    return this.articleSubject;
  }

  getArticle(id: string) {
    return this.firebaseUtil.getArticle(id);
  }

  addArticle(article: any) {
    this.firebaseUtil.addArticle(article);
  }

  updateArticle(id: string, article: any) {
    this.firebaseUtil.updateArticle(id, article);
  }

  deleteArticle(id: string) {
    this.firebaseUtil.deleteArticle(id);
  }


}
