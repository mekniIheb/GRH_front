import {Component, OnInit} from '@angular/core';
import {NiveauEtude} from "../model/niveauEtude";
import {NiveauEtudeService} from "../service/niveau-etude.service";
import {TypeContratService} from "../service/type-contrat.service";
import {TypeContrat} from "../model/typeContrat";
import {AvantageSalaireService} from "../service/avantage-salaire.service";
import {AvantageSalaire} from "../model/avantageSalaire";
import {Departement} from "../model/departement";
import {Responsable} from "../model/responsable";
import {DepartementService} from "../service/departement.service";
import {ResponsableService} from "../service/responsable.service";
import {PosteService} from "../service/poste.service";
import {Poste} from "../model/poste";

@Component({
  selector: 'app-nouveau-collaborateur',
  templateUrl: './nouveau-collaborateur.component.html',
  styleUrls: ['./nouveau-collaborateur.component.css']
})
export class NouveauCollaborateurComponent implements OnInit {
  date?: Date;
  niveauEtudeList: NiveauEtude[] = [];
  typeContratList: TypeContrat[] = [];
  avantageSalaireList: AvantageSalaire[] = [];
  departementList: Departement[] = [];
  responsableList: Responsable[] = [];
  posteList: Poste[] = [];

  ngOnInit(): void {
    this.getAllNiveauEtude();
    this.getAllTypeContrat();
    this.getAllAvantageSalaire();
    this.getAllDepartement();
    this.getAllResponsable();
    this.getAllPoste();
  }

  constructor(private niveauEtudeService: NiveauEtudeService, private typeContratService: TypeContratService,
              private avantageSalireService: AvantageSalaireService, private departementService: DepartementService,
              private responsableService: ResponsableService, private posteService: PosteService) {
  }

  getAllNiveauEtude() {
    this.niveauEtudeService.getAllNiveauEtude().subscribe({
      next: (data) => {
        this.niveauEtudeList = data;
      },
      error: (e) => console.error(e)
    });
  }

  getAllTypeContrat() {
    this.typeContratService.getAllType().subscribe({
      next: (data) => {
        this.typeContratList = data;
      },
      error: (e) => console.error(e)
    });
  }

  getAllAvantageSalaire() {
    this.avantageSalireService.getAllAvantageSalaire().subscribe({
      next: (data) => {
        this.avantageSalaireList = data;
      },
      error: (e) => console.error(e)
    });
  }

  getAllDepartement() {
    this.departementService.getAllDep().subscribe({
      next: (data) => {
        this.departementList = data;
      },
      error: (e) => console.error(e)
    });
  }

  getAllResponsable() {
    this.responsableService.getAllResponsable().subscribe({
      next: (data) => {
        this.responsableList = data;
      },
      error: (e) => console.error(e)
    });
  }

  getAllPoste() {
    this.posteService.getAllPoste().subscribe({
      next: (data) => {
        this.posteList = data;
      },
      error: (e) => console.error(e)
    });
  }
}
