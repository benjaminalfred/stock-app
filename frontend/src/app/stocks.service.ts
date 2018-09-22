import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  
baseUrl: string = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&apikey=YLP2R616L3IPTU3N&outputsize=compact&symbol=';

  constructor(private http: HttpClient) { }
  
    getStock(symbol){
    return this.http.get( this.baseUrl + symbol )
  }
}
