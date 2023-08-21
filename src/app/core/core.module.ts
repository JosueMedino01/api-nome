import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeModule } from "./home/home.module";
import { SearchNameComponent } from './search-name/search-name.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NameDataComponent } from './name-data/name-data.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



const MATERIAL_MODULES = [MatInputModule, MatFormFieldModule, MatButtonModule]


@NgModule({
  declarations: [
    SearchNameComponent,
    NameDataComponent,

  ],
  imports: [
    CommonModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, ...MATERIAL_MODULES,
  ],
  exports:[SearchNameComponent, NameDataComponent, ...MATERIAL_MODULES, ],
  providers:[]
})

export class CoreModule{}
