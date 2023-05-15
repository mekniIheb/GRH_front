import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {NouveauCollaborateurComponent} from './nouveau-collaborateur/nouveau-collaborateur.component';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {CalendarModule} from "primeng/calendar";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {FieldsetModule} from "primeng/fieldset";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PostePipe} from './pipes/poste.pipe';
import {TypeContratPipe} from './pipes/type-contrat.pipe';
import {ToastModule} from "primeng/toast";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {PosteService} from "./service/poste.service";
import {NiveauEtudeService} from "./service/niveau-etude.service";
import {TriStateCheckboxModule} from "primeng/tristatecheckbox";
import {FileUploadModule} from "primeng/fileupload";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RippleModule} from "primeng/ripple";
import {CommonModule, DatePipe} from "@angular/common";
import {TabMenuModule} from "primeng/tabmenu";
import {BreadcrumbModule} from "primeng/breadcrumb";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NouveauCollaborateurComponent,
    PostePipe,
    TypeContratPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CheckboxModule,
    DropdownModule,
    RadioButtonModule,
    CalendarModule,
    CardModule,
    TableModule,
    FieldsetModule,
    InputNumberModule,
    InputTextModule,
    TriStateCheckboxModule,
    FileUploadModule,
    InputTextareaModule,
    ReactiveFormsModule,
    RippleModule,
    TabMenuModule,
    BreadcrumbModule
  ],
  providers: [UserService, PosteService, NiveauEtudeService,DatePipe],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}
