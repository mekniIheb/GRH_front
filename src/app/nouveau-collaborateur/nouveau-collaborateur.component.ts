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
// @ts-ignore
import dayjs from 'dayjs';
import {MenuItem, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {PieceJointe} from "../model/piece-jointe";


@Component({
  selector: 'app-nouveau-collaborateur',
  templateUrl: './nouveau-collaborateur.component.html',
  styleUrls: ['./nouveau-collaborateur.component.css'],
  providers: [MessageService]
})
export class NouveauCollaborateurComponent implements OnInit {
  items!: MenuItem[];
  home!: MenuItem;
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
  selectedPosteValue = true;
  selectedDate!: Date;
  selectedRecommandationValue = false
  pieceJointeList!: any;
  user: User = {};
  flag!: string;
  msg = '';
  idUser!: number;
  currentUser!: User;
  buttonName = 'Enregistrer'
  message: string[] = [];
  selectedFiles?: FileList;
  currentFile!: File;
  filesList: any[]=[];

  constructor(private niveauEtudeService: NiveauEtudeService, private typeContratService: TypeContratService,
              private avantageSalireService: AvantageSalaireService, private departementService: DepartementService,
              private responsableService: ResponsableService, private posteService: PosteService,
              private userService: UserService, private router: Router,
              private formBuilder: FormBuilder, private messageService: MessageService) {
    const navigation = this.router.getCurrentNavigation();//
    console.log("navigation", navigation)
    if (navigation?.extras?.state) {
      const state = navigation.extras.state as {
        flag: string,
        idUser: number,
      };
      console.log("state", state)
      this.flag = state.flag;
      this.idUser = state.idUser
    }
    ;
  }

  ngOnInit(): void {
    this.items = [
      {label: 'users', icon: 'pi pi-fw pi-home'}
    ];
    this.home = {icon: 'pi pi-home'};

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
      recommendation: [false],
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
      pieceJointes: [null],
      age:['',Validators.required]

    })
    if (this.flag === "edit") {
      this.buttonName = 'Modifier'
      this.userService.getUserById(this.idUser)
        .subscribe({
          next: (data) => {
            this.currentUser = data;
            this.userForm.patchValue(data)
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    }

    if (this.flag === "consulte") {
      this.buttonName = 'Consulte'
      this.userForm.disable();
      this.userService.getUserById(this.idUser)
        .subscribe({
          next: (data) => {
            this.currentUser = data;
            this.userForm.patchValue(data)
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    }
  }

  formatSelectedDate() {
    const formattedDate = dayjs(this.selectedDate).format('DD/MM/YYYY');
    this.userForm.get('dateDeNaissance')?.setValue(formattedDate);
  }

  formatSelectedDateDebut() {
    const formattedDate = dayjs(this.selectedDate).format('DD/MM/YYYY');
    this.userForm.get('dateDebutContrat')?.setValue(formattedDate);
  }

  formatSelectedDateFin() {
    const formattedDate = dayjs(this.selectedDate).format('DD/MM/YYYY');
    this.userForm.get('dateFinContrat')?.setValue(formattedDate);
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

    this.user = this.userForm.getRawValue() as User;
    this.user.pieceJointes = this.pieceJointeList
    console.log("test", this.user)
    this.userService.saveUser(this.userForm.value).subscribe(
      data => {
        if (this.selectedFiles) {
          console.log("test1")
          const file: File | null = this.selectedFiles.item(0);
          if (file) {
            console.log("test2")
            this.currentFile = file;
            this.userService.uploadFile(this.currentFile, data.idCollaborateur).subscribe(
              data => {
                console.log(data, "test data")
              }, error => {
                console.log(error, "err")

              }
            )

          }
        }

        this.messageService.add({severity: 'success', summary: 'Success', detail: 'user ajoutée '});
        this.reset();
        setTimeout(() => {
          this.router.navigate(['/users']);
        }, 3000);
        console.log("valid:", data)
      }, error => {
        console.log("error:", error)
      }
    )
  }

  selectedContrat($event: any) {
    if (this.userForm.controls['idTypeContrat'].value === 3) {
      this.selectedContratValue = true;
    } else {
      this.selectedContratValue = false
    }
  }

  selectedPoste($event: any) {
    if (this.userForm.controls['idPoste'].value === 5) {
      this.selectedPosteValue = false;
    } else {
      this.selectedPosteValue = true
    }
  }

  selectedRecommandation($event: any) {
    if (this.userForm.controls['recommendation'].value === true) {
      this.selectedRecommandationValue = true
    } else {
      this.selectedRecommandationValue = false
    }

  }


  updateUser(): void {
    this.msg = '';
    this.user = this.userForm.value as User
    /*  this.user.dateDeNaissance = new Date(this.userForm.get('dateDeNaissance')?.value)
      this.user.dateFinContrat = new Date(this.userForm.get('dateFinContrat')?.value)*/
    this.user.pieceJointes = this.userForm.get('pieceJointe')?.value

    this.userService.updateUser(this.idUser, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'user modifiée  '});
        setTimeout(() => {
          this.router.navigate(['/users']);
        }, 3000);
      }, error => {
        console.log(error)
      })
  }

  selectFiles(event: any): void {

    console.log("filee",event)
    this.selectedFiles = event.target.files;
    this.filesList.push(event.target.files[0]);

  }

 /* uploadfile(idUser_: number) {
    if (this.selectedFiles) {
      console.log("test1")
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        console.log("test2")
        this.currentFile = file;
        this.userService.uploadFile(this.currentFile, idUser_).subscribe(
          data => {
            console.log(data, "test data")
          }, error => {
            console.log(error, "err")

          }
        )

      }
    }
  }*/
}
