import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }
 b:any=[]
 c:any=[]
 d:any=[]
 input:any=0;
 group:any={
   "name":"",
   "description":"",
   "users":""
 }
flag:boolean=false;
flag1:boolean=false;
  ngOnInit(): void {
    this.userService.getGroup().subscribe((e:any)=>{
     for(let i=0;i<e.length;i++){
       this.d[i]=e[i].name
     }
    })
   this.userService.getuser().subscribe((data :any)=>{
    // console.log(data);
    
    for(let i=0;i<data.length;i++){
     this.b[i]=data[i];
       //console.log(this.b[i]); 
    }
  });
  
  console.log(this.b)
  
  }
 enabled(){
 
  this.d.forEach((ele:any) => {
    if(this.group.name==ele){
      this.flag1=true;
      console.log(ele+","+this.group.name);
    }
  });
  
  console.log(this.group.name)
  console.log(this.flag1)
 
   let j=0;
  this.b.forEach((ele:any) => {
     if(ele.enabled==true){
     this.c[j]=ele;
     j++;}
   });
   this.group.users=this.c;
   if(this.group.name==''||this.group.name==null){
      this.snack.open(" Name is Required !!","ok",{horizontalPosition:"center",verticalPosition:"bottom"})
   }
   else if(this.group.description==''||this.group.description==null)
   {
     this.snack.open("Description is Required !!","ok",{horizontalPosition:"center",verticalPosition:"bottom"})
   }
   else if(this.group.users==null || this.group.users==''){
     this.snack.open("Please Select Users !!","ok",{horizontalPosition:"center",verticalPosition:"bottom"})
   }
   else if(this.flag1==true)
   {
    Swal.fire("Fail !!","This Group is already exist","error")
   }
   else{
   this.userService.postGroup(this.group).subscribe((group:any)=>{
      console.log(group);

        
          Swal.fire("Success","Group Created Successfully","success")    
   },
   (error)=>{
     console.log(error)
     
   }
   )}
   console.log(this.group.users)
   

   this.ngOnInit()
   
  console.log(this.group.users)
   
 }
 reload(){
   if(this.input>1){
   window.location.reload();
   }
 }
 
}
