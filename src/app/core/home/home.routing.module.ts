import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SearchNameComponent } from '../search-name/search-name.component';

const routes: Routes = [
  {path: '',
  component: HomeComponent
  },
  {path: 'search',
  component: SearchNameComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
