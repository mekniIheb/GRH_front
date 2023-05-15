import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../model/user";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [MessageService]
})
export class UsersComponent implements OnInit {
  usersList: User[] = [];
  totalMasseSalariale: any;
  salaireMoyen: any;
  salaireMoyenByUser: any;
  pyramideAgeMoy!: number

  constructor(private userService: UserService, private router: Router, private messageService: MessageService
    , private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.retrieveUsers();
    this.getPyramideAge();
    this.getSalaireMoyenne();
  }

  retrieveUsers(): void {
    this.userService.getAllUser()
      .subscribe({
        next: (data) => {
          this.usersList = data;
          console.log(data);
          for (let i = 0; i < this.usersList.length; i++) {
            this.userService.getMasseSalarialeById(this.usersList[i].idCollaborateur).subscribe(
              masseSalariale => {
                this.usersList[i].masseSalariale=masseSalariale;
              },
              error => {
                console.log(error);
              }
            );
          }
        },
        error: (e) => console.error(e)
      });
  }

  getSalaireMoyenne(): void {
    this.userService.getSalaireMoyenne()
      .subscribe({
        next: (data) => {
          this.salaireMoyen = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  getSalaireMoyenneByUser(idUser: number): void {
    this.userService.getMasseSalarialeById(idUser)
      .subscribe({
        next: (data) => {
          this.salaireMoyenByUser = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  getPyramideAge(): void {
    this.userService.getPyramideAge()
      .subscribe({
        next: (data) => {
          this.pyramideAgeMoy = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  ajouterUSer(flag: string) {
    const navigationExtras: NavigationExtras = {
      state: {flag: flag}
      , relativeTo: this.route
    };
    this.router.navigate(['/nouveau-collaborateur'], navigationExtras);
  }


  delete(idCollaborateur: any) {
    this.userService.deleteUser(idCollaborateur).subscribe(data => {
        this.messageService.clear();
        this.messageService.add({
          key: 'c',
          sticky: true,
          severity: 'warn',
          summary: 'user deleted with succes ',
          detail: ''
        });
        this.retrieveUsers();
      },
      error =>
        console.log(error))
  }


  userDetails(idCollaborateur: any, flag: string) {
    const navigationExtras: NavigationExtras = {
      state: {
        idUser: idCollaborateur,
        flag: flag
      }
      , relativeTo: this.route
    };
    console.log("test***", navigationExtras)
    this.router.navigate(['/nouveau-collaborateur'], navigationExtras);//b3ath valeur 'navigationExtras' ll route l 7atiteha state fiha idUSer w flag

  }
}
