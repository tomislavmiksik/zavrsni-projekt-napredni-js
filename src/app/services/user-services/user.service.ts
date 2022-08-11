import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';
import { FirebaseUtilService } from '../../shared/firebase-util.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private firebaseUtil: FirebaseUtilService) { this.init();}


  users: User[] = [];

  userSubject = new BehaviorSubject<User[]>(this.users);

  init(){
    this.firebaseUtil.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        this.userSubject.next(this.users);
      }
    );
  }

  getUsers() {
    return this.userSubject;
  }

  getUser(id: string) {
    return this.firebaseUtil.getUser(id);
  }

  addUser(user: User) {
    this.firebaseUtil.addUser(user);
  }

  updateUser(id: string, user: User) {
    this.firebaseUtil.updateUser(id, user);
  }

  deleteUser(id: string) {
    this.firebaseUtil.deleteUser(id);
  }
}
