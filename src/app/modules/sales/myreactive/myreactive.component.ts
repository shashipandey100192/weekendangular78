import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-myreactive',
  templateUrl: './myreactive.component.html',
  styleUrls: ['./myreactive.component.scss']
})
export class MyreactiveComponent implements OnInit{



 myform=new FormGroup({
  user:new FormControl('username',Validators.required),
  phone:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),
  pass:new FormControl('',Validators.required),
  })
 

ngOnInit()
{

}

mysubmit()
{
  console.log(this.myform.value);
}
  
}
