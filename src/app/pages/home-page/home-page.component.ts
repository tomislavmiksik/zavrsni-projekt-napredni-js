import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';
import { FirebaseUtilService } from 'src/app/services/firebase-util.service';
import { UserService } from 'src/app/services/user-services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  articles: Article[] = [];
  categories: Category[] = [];

  constructor(
    private firebaseUtilService: FirebaseUtilService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.userSubject.forEach((users) => {
      console.log(users);
    });

    this.firebaseUtilService.getArticles().subscribe((articles) => {
      this.articles.push(...articles);
    });

    this.firebaseUtilService.getCategories().subscribe((categories) => {
      this.categories.push(...categories);
    });
  }
}
