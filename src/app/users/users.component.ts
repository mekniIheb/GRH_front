import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../model/user";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {NiveauEtudeService} from "../service/niveau-etude.service";


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
  pyramideAge: any;

  constructor(private userService: UserService, private router: Router, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAllUser()
      .subscribe({
        next: (data) => {
          this.usersList = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  ajouterUSer() {
    this.router.navigate(['/nouveau-collaborateur'])
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




}
