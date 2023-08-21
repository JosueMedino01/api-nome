import { Component, Input, OnInit } from '@angular/core';
import { DataNameInterface } from '../Interfaces/data-name.interface';
import {Chart} from 'chart.js/auto';
@Component({
  selector: 'app-name-data',
  templateUrl: './name-data.component.html',
  styleUrls: ['./name-data.component.scss']
})
export class NameDataComponent implements OnInit{
  @Input() dataName!: DataNameInterface;

  //chart
  public chart:any;

  ngOnInit(): void {
    console.log(this.dataName);
    this.createChart();
  }

  createChart(){

    //Geting data for chart
    const xArray = this.dataName.res.map(e => e.periodo);
    const yArray = this.dataName.res.map(e => e.frequencia);
    this.chart = new Chart("MyChart", {




      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [...xArray],
	       datasets: [
          {

            data: [...yArray],
            backgroundColor: `var(--cor-main)`
          },

        ]
      },
      options: {
        //aspectRatio:2.5,
        plugins: {
          title: {
            display: false,
            text: 'Periodo X Frequência',
          },
          legend:{
            display:false,
          }
        }




      },


    });
  }
}
