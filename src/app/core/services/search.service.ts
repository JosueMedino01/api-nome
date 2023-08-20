import { SearchNameComponent } from './../search-name/search-name.component';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataNameInterface } from '../Interfaces/data-name.interface';

@Injectable({

  providedIn:'root'
})

export class SearchService {
  uri = 'https://servicodados.ibge.gov.br/api/v2/censos';
  constructor(private httpClient: HttpClient){


  }


  searchName(name:string): Observable<DataNameInterface[]>{
    const url = `${this.uri}/nomes/${name}`;
    return this.httpClient.get<DataNameInterface[]>(url);
  }
}
