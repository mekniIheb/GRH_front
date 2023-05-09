import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AvantageSalaire} from "../model/avantageSalaire";

const api_ = 'http://localhost:8081/api'

@Injectable({
  providedIn: 'root'
})
export class AvantageSalaireService {

  constructor(private http: HttpClient) {
  }

  getAllAvantageSalaire(): Observable<AvantageSalaire[]> {
    return this.http.get<AvantageSalaire[]>(api_ + '/avantageSalaire')
  }
}
