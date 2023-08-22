import { SearchService } from './../services/search.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { DataNameInterface } from '../Interfaces/data-name.interface';




@Component({
  selector: 'app-search-name',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.scss']
})
export class SearchNameComponent implements OnInit{

  nameForm!:  FormGroup;
  dataName!: DataNameInterface;
  loader = false;
  invalid = false;


  constructor(private router:Router, private searchService:SearchService,  private formBulder:FormBuilder){

  }

  ngOnInit():void{
    this.nameForm = new FormGroup({
      name: new FormControl<string>('Josué', [Validators.required]),
    })

    this.searchService.searchName('Josué').subscribe((element)=> {
      if(element.length > 0){
        this.dataName = element[0]
        this.invalid = false
      } else {
        this.invalid = true;
      }

      this.loader = false});


  }

  redirectForHome(){
    this.router.navigateByUrl('./home')
  }

  searchName(){

    this.loader = true;
    const {name} = this.nameForm.value ;
    this.searchService.searchName(name).subscribe((element)=> {
      if(element.length > 0){
        this.dataName = element[0]
        this.invalid = false
      } else {
        this.invalid = true;
      }

      this.loader = false});
  }

}
