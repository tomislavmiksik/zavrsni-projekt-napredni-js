import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FirebaseUtilService } from '../firebase-util.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor(private http:HttpClient, private firebaseUtil: FirebaseUtilService) { this.init();}


  articles: any[] = [];

  articleSubject = new BehaviorSubject<any[]>(this.articles);


  init(){
    this.firebaseUtil.getArticles().subscribe(
      (articles: any[]) => {
        this.articles = articles;
        this.articleSubject.next(this.articles);
      }
    );
  }

  getArticles(){
    return this.articleSubject;
  }
}
