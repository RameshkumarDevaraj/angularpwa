import { Component, OnInit } from '@angular/core';
import { Item, AngularServiceService } from './angular-service.service';
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


  items:  Array<Item>;
   constructor(  private servive:AngularServiceService){
      
   }
    mehtodCall()
    {
       this.servive.fetch().subscribe((data:Array<Item>)=>
       {
          this.items=data;
       },
       (err)=>{
          
       }
       );
      }

  
}
