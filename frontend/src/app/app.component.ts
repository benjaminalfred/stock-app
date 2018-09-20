import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { StocksService } from './stocks.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //  title = 'alpha-vantage';
  
/*  is_valid;
  phone_number;
  carrier;
  line_type; */

  
  constructor(private _stocks: StocksService) {}
  
    ngOnInit(){
     
    this._stocks.getStock()
       .subscribe( (data:any) => {
      
       console.log(data)
       })

  } 
}