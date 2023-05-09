import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Poste} from "../model/poste";
import {TypeContrat} from "../model/typeContrat";

const url = 'http://localhost:8081/api';

@Injectable({
  providedIn: 'root'
})
export class TypeContratService {

  constructor(private http: HttpClient) {
  }

  getAllType(): Observable<TypeContrat[]> {
    return this.http.get<TypeContrat[]>(url + '/typeContrat');

  }

  async getTypeContrat(idTypeContrat: any): Promise<any> {
    return this.http.get<TypeContrat>(`${url}/typeContrat/${idTypeContrat}`).toPromise();
  }
}
