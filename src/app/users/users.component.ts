import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../model/user";
import {colors} from "@angular/cli/src/utilities/color";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users?: User[];

  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    console.log("--",this.users)
    this.retrieveTutorials;
  }
  retrieveTutorials(): void {
    this.userService.getAllUser()
      .subscribe({
        next: (data) => {
          this.users = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
