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
import {User} from "../model/user";
import {UserService} from "../service/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
// @ts-ignore
import dayjs from 'dayjs';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-nouveau-collaborateur',
  templateUrl: './nouveau-collaborateur.component.html',
  styleUrls: ['./nouveau-collaborateur.component.css'],
  providers: [MessageService]
})
export class NouveauCollaborateurComponent implements OnInit {
  date?: Date;
  niveauEtudeList: NiveauEtude[] = [];
  typeContratList: TypeContrat[] = [];
  avantageSalaireList: AvantageSalaire[] = [];
  departementList: Departement[] = [];
  responsableList: Responsable[] = [];
  posteList: Poste[] = [];
  userList: User[] = [];
  userForm!: FormGroup;
  selectedContratValue = false;
  selectedPosteValue=true;
  selectedDate!: Date;
 selectedRecommandationValue=false
  pieceJointeList!: any[];
  fileContent: string = '';
  constructor(private niveauEtudeService: NiveauEtudeService, private typeContratService: TypeContratService,
              private avantageSalireService: AvantageSalaireService, private departementService: DepartementService,
              private responsableService: ResponsableService, private posteService: PosteService,
              private userService: UserService, private datePipe: DatePipe,
              private formBuilder: FormBuilder, private messageService: MessageService) {
  }

  ngOnInit(): void {
    const currentDate = dayjs().format('YYYY/MM/DD');
    this.getAllNiveauEtude();
    this.getAllTypeContrat();
    this.getAllAvantageSalaire();
    this.getAllDepartement();
    this.getAllResponsable();
    this.getAllPoste();
    this.getAllUSer();

    this.userForm = this.formBuilder.group({
      cin: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      nomComplet: ['', Validators.required],
      numeroDuCompte: ['', [Validators.required, Validators.pattern('^[0-9]{13}$')]],
      numeroSecuriteSociale: ['', [Validators.pattern('^[0-9]{15}$')]],
      numeroTelephone: ['', Validators.required],
      dateDeNaissance: ['', Validators.required],
      adresse: [''],
      email: ['', [Validators.email]],
      natureEtude: ['', Validators.required],
      certifications: [''],
      anneeExperience: ['', Validators.required],
      recommandation: [null],
      status: [false],
      collaborateur: [''],
      commentaire: [''],
      salaireDeBase: ['', Validators.required],
      dateDebutContrat: [null],
      dateFinContrat: [null],
      idTypeContrat: ['', Validators.required],
      idAvantageSalaire: [''],
      idNiveauEtude: ['', Validators.required],
      idPoste: ['', Validators.required],
      idResponsable: [''],
      idDepartement: ['', Validators.required],
      pieceJointes: []
    })
  }

  formatSelectedDate() {
    const formattedDate = dayjs(this.selectedDate).format('DD/MM/YYYY');
    this.userForm.get('dateDeNaissance')?.setValue(formattedDate);
  }

  formatSelectedDateDebut() {
    const formattedDate = dayjs(this.selectedDate).format('DD/MM/YYYY');
    this.userForm.get('dateDebutContrat')?.setValue(formattedDate);
  }

  getAllNiveauEtude() {
    this.niveauEtudeService.getAllNiveauEtude().subscribe({
      next: (data) => {
        this.niveauEtudeList = data;
      },
      error: (e) => console.error(e)
    });
  }

  getAllUSer() {
    this.userService.getAllUser().subscribe({
      next: (data) => {
        this.userList = data;
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

  reset() {
    this.userForm.reset();

  }

  saveUser() {
    console.log("form",this.userForm.value)
   /* this.userService.saveUser(this.userForm.value).subscribe(
      data => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'user ajoutée '});
        this.reset();
        console.log("valid:", data)
      }, error => {
        console.log("error:", error)
      }
    )*/
  }

  selectedContrat($event: any) {
    if (this.userForm.controls['idTypeContrat'].value === 3) {
      this.selectedContratValue = true;
      console.log("--", this.selectedContratValue)
    } else {
      this.selectedContratValue = false
    }
  }

  selectedPoste($event: any) {
    if (this.userForm.controls['idPoste'].value === 5) {
      this.selectedPosteValue = false;
      console.log("--", this.selectedPosteValue)
    } else {
      this.selectedPosteValue = true
    }
  }

  selectedRecommandation($event: any) {
    if (this.userForm.controls['recommandation'].value === true){
      this.selectedRecommandationValue=true
    }else {
      this.selectedRecommandationValue=false
    }

  }

  onFileSelect(event: any): void {
    let fileList: FileList = event.target.files;
    this.pieceJointeList = [];
    let files: any[] = [];
    for (let i = 0; i < fileList.length; i++) {
      let pieces: any = {
        name: '',
        type: '',
        data: ''
      }
      files[i] = fileList[i];
      let fileReader: FileReader = new FileReader();
      let self = this;
      fileReader.onloadend = function (x) {
        self.fileContent = fileReader.result as string;
        pieces.data = btoa(self.fileContent);
      }
      fileReader.readAsText(files[i]);
      pieces.name = files[i].name;
      pieces.type = files[i].type;
      this.pieceJointeList.push(pieces);
    }
  }
}
