import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  constructor(private userService:UserService) { }
group:any={
  "name":""
}
card:any=false;
groupDetail:any
displayedColumns: string[] = ['demo-id', 'demo-name', 'demo-image'];

  ngOnInit(): void {
    
  }
  findUser(){
    this.userService.getGroup().subscribe((data:any)=>{
      console.log(data);
      data.forEach((ele:any) => {
        if(this.group.name==ele.name){
          console.log(ele);
          this.dataSource=ele.users
          this.groupDetail=ele
          this.card=true;
        }
        
      });
      
  })
  }
dataSource:any
}
