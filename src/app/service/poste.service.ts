import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Poste} from "../model/poste";
import {Observable} from "rxjs";


const url = 'http://localhost:8081/api'

@Injectable({
  providedIn: 'root'
})
export class PosteService {


  constructor(private http: HttpClient) {
  }

  getAllPoste(): Observable<Poste[]> {
    return this.http.get<Poste[]>(url + '/poste');

  }

  async getPoste(idPoste: any): Promise<any> {
    return this.http.get<Poste>(`${url}/poste/${idPoste}`).toPromise();
  }

}
