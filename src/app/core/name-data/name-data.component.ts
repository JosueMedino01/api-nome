import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataNameInterface } from '../Interfaces/data-name.interface';
import {Chart} from 'chart.js/auto';
@Component({
  selector: 'app-name-data',
  templateUrl: './name-data.component.html',
  styleUrls: ['./name-data.component.scss']
})
export class NameDataComponent implements OnInit{
  @Input() dataName!: DataNameInterface;
  @Output() sumValue = new EventEmitter<any>
  @Output() biggerValue = new EventEmitter<number>
  showChart = true;
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

    //Somando o total da frequência e Emitindo para o component Pai
    const sum = yArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const biggerNumber = Math.max(...yArray);
    this.sumValue.emit(sum);
    this.biggerValue.emit(biggerNumber);

    //Determinando a maleta de cores do chart
    const colorColum = [
      '#E18C8C',

    ]


    this.chart = new Chart("MyChart", {


      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [...xArray],
	       datasets: [
          {

            data: [...yArray],
            backgroundColor: colorColum.slice(0, yArray.length)
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
          },
        },

        scales: {
          x: {
            ticks: {
              font: {
                size: 9, // Altere o tamanho da fonte para o valor desejado
              },
              color: 'black' // Altere a cor dos rótulos X-Axis para a cor desejada
            },
          },
          y: {
            ticks: {
              font: {
                size: 10, // Altere o tamanho da fonte para o valor desejado
              },
              color: 'black' // Altere a cor dos rótulos Y-Axis para a cor desejada
            },
          }
        },
      },
    });
  }



  toggleClass(){
    this.showChart = !this.showChart
  }



}
