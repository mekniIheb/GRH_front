import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Responsable} from "../model/responsable";

const api_ = 'http://localhost:8081/api'

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  constructor(private http: HttpClient) {
  }

  getAllResponsable(): Observable<Responsable[]> {
    return this.http.get<Responsable[]>(api_ + '/responsable')
  }
}
