import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FirebaseUtilService } from '../firebase-util.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(
    private http: HttpClient,
    private firebaseUtil: FirebaseUtilService
  ) {
    this.init();
  }

  categories: any[] = [];

  categoriesSubject = new BehaviorSubject<any[]>(this.categories);

  init() {
    this.firebaseUtil.getCategories().subscribe((categories: any[]) => {
      this.categories = categories;
      this.categoriesSubject.next(this.categories);
    });
  }

  getCategories() {
    return this.categories;
  }
}
