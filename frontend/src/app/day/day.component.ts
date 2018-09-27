import { Component, OnInit } from "@angular/core"
import { StocksService } from "../stocks.service"

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit {
  stockSymbol = ""
  constructor(private _stocks: StocksService) {}

  stockPrice: any = []
  stockDate: any = []

  stockSearch() {
    this._stocks.getStock(this.stockSymbol).subscribe((data: any) => {
      this.lineChartLabels.length = 0;
      for (let date in data["Monthly Adjusted Time Series"]) {
        this.lineChartLabels.push(date)
        let wholePrice = data["Monthly Adjusted Time Series"][date]["4. close"]
        let rndPrice = Math.round(wholePrice)
        this.stockPrice.push(rndPrice)
      }
      console.log(this.stockDate)
      console.log(this.stockPrice)

      this.lineChartData = [{ data: this.stockPrice }]
      this.lineChartLabels = this.stockDate;
    })
  }

  ngOnInit() {
    this.lineChartData = [{ data: [], label:[]}]
    //this.lineChartLabels = []
  }

  // lineChart
  public lineChartData: Array<any> = []
  public lineChartLabels: Array<any> = []
  public lineChartOptions: any = {
    responsive: true
  }
  /*public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ]*/
  public lineChartLegend: boolean = false
  public lineChartType: string = "line"

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length)
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {
        data: new Array(this.lineChartData[i].data.length),
        label: this.lineChartData[i].label
      }
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor(Math.random() * 100 + 1)
      }
    }
    this.lineChartData = _lineChartData
  }

  // events
  public chartClicked(e: any): void {
    console.log(e)
  }

  public chartHovered(e: any): void {
    console.log(e)
  }
}