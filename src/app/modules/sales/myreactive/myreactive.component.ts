import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-myreactive',
  templateUrl: './myreactive.component.html',
  styleUrls: ['./myreactive.component.scss']
})
export class MyreactiveComponent implements OnInit{
  submitted=false;


  
 myform=new FormGroup({
  username:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
  phone:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),
  pass:new FormControl('',Validators.required),
  })
 
  get f(): any {
    return this.myform.controls;
  }


ngOnInit()
{

}

mysubmit()
{
  this.submitted=true;
  if(this.myform.invalid)
  {
    return 
  }
  console.log(this.myform.value);
}
  
}
