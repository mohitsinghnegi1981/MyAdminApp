import { Component, OnInit } from '@angular/core';
import { DataService  } from '../data.service';
import { Observable } from "rxjs";
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  users$ : Object;
  constructor(private data: DataService ) { }

  ngOnInit() {

    this.data.getUsers().subscribe(
      data=> this.users$=data);
  }

}
