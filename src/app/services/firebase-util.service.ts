import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseUtilService {
  baseUrl =
    'https://zavrsni-projekt-d8c20-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get(this.baseUrl + 'items.json').pipe(
      map((res: any) => {
        const articles = [];
        for (const key in res) {
          articles.push({ ...res[key], id: key });
        }
        return articles;
      })
    );
  }

  getUsers() {
    return this.http.get(this.baseUrl + 'users.json').pipe(
      map((res: any) => {
        const users = [];
        for (const key in res) {
          users.push({ ...res[key], id: key });
        }
        return users;
      })
    );
  }
}
