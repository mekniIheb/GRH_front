import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

const url = 'http://localhost:8081/api'

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {
  }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(url + '/user', user);
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(url + '/user');
  }

  deleteUser(idUser: number): Observable<any> {
    return this.http.delete(url + '/user/' + idUser);
  }
}
