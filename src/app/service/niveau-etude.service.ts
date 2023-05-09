import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "@angular/cli/lib/config/workspace-schema";
import {Observable} from "rxjs";

import {NiveauEtude} from "../model/niveauEtude";

const api_ = 'http://localhost:8081/api'

@Injectable({
  providedIn: 'root'
})
export class NiveauEtudeService {
  constructor(private http: HttpClient) {
  }

  getAllNiveauEtude(): Observable<NiveauEtude[]> {
    return this.http.get<NiveauEtude[]>(api_ + '/niveauEtude')
  }
}
