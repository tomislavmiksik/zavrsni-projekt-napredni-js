import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { CartService } from 'src/app/services/cart-services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cart: Article[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }
}
