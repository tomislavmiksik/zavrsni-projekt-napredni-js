import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FirebaseUtilService } from 'src/app/services/firebase-util.service';
import { UserService } from 'src/app/services/user-services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private firebaseUtilService: FirebaseUtilService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.userSubject.forEach((users) => {
      console.log(users);
    });

    this.firebaseUtilService.getArticles().subscribe((articles) => {
      console.log(articles);
    });
  }
}
