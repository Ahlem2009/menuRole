import { Component, Input, OnInit } from '@angular/core';
import {ServicesService}  from '../services.service';
import {Profile} from '../profile.model';
import{Menu} from '../menus.model'
@Component({
  selector: 'app-asidenav',
  templateUrl: './asidenav.component.html',
  styleUrls: ['./asidenav.component.css']
})
export class AsidenavComponent implements OnInit {
  title = 'menuRole';
  menus:Menu []=[];
    @Input() prof:string='';
    users:Profile[]=[]
    constructor(private service:ServicesService ){}
    
    ngOnInit(): void {
    
    console.log('hi');
    this.service.getProfil(this.prof).subscribe((res:any)=>{
     console.log(res);
     console.log('hello');
     this.users=res; 
     return res;
   })
}
  
// Getprofil(){
//   console.log('hi');
//   this.service.getProfil(this.prof).subscribe((res:any)=>{
//    console.log(res);
//    console.log('hello');
//    this.users=res; 
//    return res;
//  })
// }
}
