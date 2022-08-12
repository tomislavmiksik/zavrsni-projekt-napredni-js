import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Cart } from '../models/cart';

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
  getCategories() {
    return this.http.get(this.baseUrl + 'categories.json').pipe(
      map((res: any) => {
        const categories = [];
        for (const key in res) {
          categories.push({ ...res[key], id: key });
        }
        return categories;
      })
    );
  }
  getOrders() {
    return this.http.get(this.baseUrl + 'orders.json').pipe(
      map((res: any) => {
        const orders = [];
        for (const key in res) {
          orders.push({ ...res[key], id: key });
        }
        return orders;
      })
    );
  }

  getArticle(id: string) {
    return this.http.get(this.baseUrl + 'items/' + id + '.json');
  }
  getUser(id: string) {
    return this.http.get(this.baseUrl + 'users/' + id + '.json');
  }
  getCategory(id: string) {
    return this.http.get(this.baseUrl + 'categories/' + id + '.json');
  }
  getOrder(id: string) {
    return this.http.get(this.baseUrl + 'order/' + id + '.json');
  }

  addOrder(order: Cart) {
    return this.http
      .post(this.baseUrl + 'order.json', order)
      .subscribe((res) => {
        console.log(res);
      });
  }

  addArticle(article: any) {
    return this.http
      .post(this.baseUrl + 'items.json', article)
      .subscribe((res) => {
        console.log(res);
      });
  }

  addUser(user: any) {
    return this.http
      .post(this.baseUrl + 'users.json', user)
      .subscribe((res) => {
        console.log(res);
      });
  }
  addCategory(category: any) {
    return this.http
      .post(this.baseUrl + 'categories.json', category)
      .subscribe((res) => {
        console.log(res);
      });
  }



  updateArticle(id: string, article: any) {
    return this.http.put(this.baseUrl + 'items/' + id + '.json', article);
  }
  updateUser(id: string, user: any) {
    return this.http.put(this.baseUrl + 'users/' + id + '.json', user);
  }
  updateCategory(id: string, category: any) {
    return this.http.put(this.baseUrl + 'categories/' + id + '.json', category);
  }
  updateOrder(id: string, order: any) {
    return this.http.put(this.baseUrl + 'order/' + id + '.json', order);
  }

  deleteArticle(id: string) {
    return this.http.delete(this.baseUrl + 'items/' + id + '.json');
  }
  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + 'users/' + id + '.json');
  }
  deleteCategory(id: string) {
    return this.http.delete(this.baseUrl + 'categories/' + id + '.json');
  }
  deleteOrder(id: string) {
    return this.http.delete(this.baseUrl + 'order/' + id + '.json');
  }
}
