import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  
url: string = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=AAPL&apikey=YLP2R616L3IPTU3N&outputsize=compact';

  constructor(private http: HttpClient) { }
  
    getStock(){
    return this.http.get( this.url )
  }
}
