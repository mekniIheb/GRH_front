import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
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

  updateUser(idUser: number, user: User): Observable<User> {
    return this.http.put<User>(`${url}/user/${idUser}`, user);
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(url + '/user');
  }

  deleteUser(idUser: number): Observable<any> {
    return this.http.delete(url + '/user/' + idUser);
  }

  getMasseSalarialeById(idUser: any): Observable<any> {
    return this.http.get(url + '/masse-salariale/' + idUser)
  }

  getPyramideAge(): Observable<any> {
    return this.http.get(url + '/pyramide-age')
  }

  getSalaireMoyenne(): Observable<any> {
    return this.http.get(url + '/salaire-moy')
  }

  getUserById(idUSer: number): Observable<User> {
    return this.http.get<User>(url + '/user/' + idUSer)
  }


  uploadFile(file: File, idUser: any): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    const req = new HttpRequest('POST', `${url}/upload/${idUser}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}
