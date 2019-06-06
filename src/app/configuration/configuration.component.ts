import { Component, OnInit } from '@angular/core';
import { DataService  } from '../data.service';
import { Observable, config } from "rxjs";


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
 config$ : object;
  
  constructor(private data: DataService ) { }

  ngOnInit() {

    this.data.getCustomerConfig().subscribe(

      config => this.config$=config
    )

  
  }

}
