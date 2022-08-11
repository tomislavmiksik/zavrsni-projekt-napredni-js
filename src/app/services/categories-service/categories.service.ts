import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FirebaseUtilService } from '../../shared/firebase-util.service';

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
    return this.categoriesSubject;
  }

  getCategory(id: string) {
    return this.firebaseUtil.getCategory(id);
  }

  addCategory(category: any) {
    this.firebaseUtil.addCategory(category);
  }

  updateCategory(id: string, category: any) {
    this.firebaseUtil.updateCategory(id, category);
  }

  deleteCategory(id: string) {
    this.firebaseUtil.deleteCategory(id);
  }
}
