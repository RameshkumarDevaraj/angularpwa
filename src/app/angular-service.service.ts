import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// export  interface  Item{
//   name:  string;
//   description:  string;
//   url:  string;
//   html:  string;
//   markdown:  string;
//   }


@Injectable({
  providedIn: 'root'
})
export class AngularServiceService {

   private url :string ='https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyStockWatch.json';

  constructor(private http:HttpClient) { }


  fetch():  Observable<any>{
    return <Observable<any>> this.http.get(this.url);
    }
}
