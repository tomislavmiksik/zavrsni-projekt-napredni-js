import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart-services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  @Output() clear: EventEmitter<Cart> = new EventEmitter<Cart>();
  cart: Article[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  order() {
    this.cartService.order();
    this.cart = [];
  }
}
