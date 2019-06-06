import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent} from './mainpage/mainpage.component';
import { ConfigurationComponent} from  './configuration/configuration.component'; 
import { ConfigdetailComponent} from  './configdetail/configdetail.component'; 
import { DataService } from './data.service';

const routes: Routes = [
{
  path :'',
  component: ConfigurationComponent 
},
{
  path :'configuration',
  component: ConfigurationComponent 
},
{
  path :'main',
  component: MainpageComponent 
},
{
  path :'configdetail/:id',
  component: ConfigdetailComponent 
},

];

@NgModule({
  providers : [DataService],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
