import { Component } from '@angular/core';
import { StocksService } from './stocks.service';

@Component({
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

  
  constructor(private _look: StocksService) {}
  
    ngOnInit(){
   
 /*   this._look.getPhoneDetails()
      .subscribe( (data:any) => {
        this.is_valid = data.is_valid;
        this.phone_number = data.phone_number;
        this.carrier = data.carrier;
        this.line_type = data.line_type
      console.log(data)
      console.log(this.is_valid)
 */     })

  } 
}
