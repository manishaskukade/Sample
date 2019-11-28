import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (private service:DataService)
  {

  }

  emps:any;
  

  ngOnInit() {
    let observableResult =this.service.select();
     observableResult.subscribe((result)=>{
      console.log(result);
      this.emps=result;
    });
  }

}
