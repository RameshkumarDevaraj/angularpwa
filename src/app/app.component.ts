import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from './angular-service.service';
import { MethodCall } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  ngOnInit(): void {
    this.mehtodCall();
  }
  title = 'AngularTestProject';

  items: any = [];
   constructor(  private servive:AngularServiceService){
      
   }
    mehtodCall()
    {
       this.servive.fetch().subscribe(data=>
       {
          console.log("Data"+ data );
          this.items=data.data;
          console.log("item"+ this.items.data );
       },
       (err)=>{
          
       }
       );
      }

  
}
