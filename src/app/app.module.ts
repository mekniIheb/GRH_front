import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NouveauCollaborateurComponent } from './nouveau-collaborateur/nouveau-collaborateur.component';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {CalendarModule} from "primeng/calendar";
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NouveauCollaborateurComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CheckboxModule,
    DropdownModule,
    RadioButtonModule,
    CalendarModule,
    CardModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
