import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Departement} from "../model/departement";

const api_ = 'http://localhost:8081/api'

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient) {
  }

  getAllDep(): Observable<Departement[]> {
    return this.http.get<Departement[]>(api_ + '/departement')
  }
}
