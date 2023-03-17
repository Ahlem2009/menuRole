import { Component } from '@angular/core';

// import {ServicesService}  from '../services.service';
// import {Profile} from '../profile.model';
// import{Menu} from '../menus.model'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
prof='admin'
constructor(){this.prof='admin'}

// Getprofil(){
//   this.service.getProfil(this.prof).subscribe((res:any)=>{
//    console.log(res);
//    this.users=res; 
//    return res;
//  })
// }

}
