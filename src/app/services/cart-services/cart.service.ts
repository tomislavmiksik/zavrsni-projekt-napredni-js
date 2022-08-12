import { JsonPipe } from '@angular/common';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Cart } from 'src/app/models/cart';
import { FirebaseUtilService } from 'src/app/shared/firebase-util.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl =
    'https://zavrsni-projekt-d8c20-default-rtdb.europe-west1.firebasedatabase.app/';
  private cart: Article[] = [];

  new: Cart = {
    articles: [],
    total: 0,
  };

  constructor(
    private fireBaseUtil: FirebaseUtilService,
    private http: HttpClient
  ) {}

  addToCart(article: Article) {
    this.cart.push(article);
  }

  getCart() {
    return this.cart;
  }

  deleteFromCart(article: Article) {
    this.cart = this.cart.filter((item) => item !== article);
  }

  clearCart() {
    this.cart = [];
  }

  order() {
    this.new.articles = this.cart;
    var total = this.cart.reduce((a, b) => a + b.cost, 0).toFixed(2);

    this.new.total = parseFloat(total);

    this.fireBaseUtil.addOrder(this.new);
    this.clearCart();
  }
}
