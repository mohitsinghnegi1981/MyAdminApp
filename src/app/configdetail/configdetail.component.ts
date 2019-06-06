import { Component, OnInit } from '@angular/core';
import { DataService  } from '../data.service';
import { Observable, config } from "rxjs";
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-configdetail',
  templateUrl: './configdetail.component.html',
  styleUrls: ['./configdetail.component.scss']
})
export class ConfigdetailComponent implements OnInit {
  
  configdet$ : object;
  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.configdet$ = params.id );
   }

  ngOnInit() {
  
  this.data.getCustomerConfigDetails(this.configdet$).subscribe(
    configdet =>this.configdet$=configdet

    )



  }

  updateConfig=function(){
    alert('hi');
  }


}
