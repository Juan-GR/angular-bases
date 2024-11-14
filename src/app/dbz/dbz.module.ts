import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MainPageComponent } from "./pages/main-page.component";
import { AddCharacterFormComponent } from './components/add-character-form/add-character-form.component';
import { ListComponent } from "./components/list/list.component";



@NgModule({
  exports: [MainPageComponent],
  declarations: [MainPageComponent, ListComponent, AddCharacterFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
