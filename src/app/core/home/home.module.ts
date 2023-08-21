import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { NameDataComponent } from '../name-data/name-data.component';
import { SearchNameComponent } from '../search-name/search-name.component';
import { CoreModule } from '../core.module';




@NgModule({
  declarations: [HomeComponent, ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    

  ],
  exports:[
    HomeComponent,
  ]
})
export class HomeModule { }


