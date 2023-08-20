import { Component, Input, OnInit } from '@angular/core';
import { DataNameInterface } from '../Interfaces/data-name.interface';

@Component({
  selector: 'app-name-data',
  templateUrl: './name-data.component.html',
  styleUrls: ['./name-data.component.css']
})
export class NameDataComponent implements OnInit{
  @Input() dataName!: DataNameInterface;

  ngOnInit(): void {
    console.log(this.dataName);
  }
}
