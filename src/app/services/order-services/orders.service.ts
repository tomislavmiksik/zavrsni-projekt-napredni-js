import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FirebaseUtilService } from 'src/app/shared/firebase-util.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient,
    private firebaseUtil: FirebaseUtilService
  ) {
    this.init();
  }

  orders: any[] = [];

  ordersSubject = new BehaviorSubject<any[]>(this.orders);

  init() {
    this.firebaseUtil.getOrders().subscribe((orders: any[]) => {
      this.orders = orders;
      this.ordersSubject.next(this.orders);
    });
  }

  getOrders() {
    return this.ordersSubject;
  }

  getOrder(id: string) {
    return this.firebaseUtil.getOrder(id);
  }

  addOrder(order: any) {
    this.firebaseUtil.addOrder(order);
  }

  updateOrder(id: string, order: any) {
    this.firebaseUtil.updateOrder(id, order);
  }

  deleteOrder(id: string) {
    this.firebaseUtil.deleteOrder(id);
  }

}
