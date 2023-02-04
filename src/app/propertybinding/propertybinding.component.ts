import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.scss']
})
export class PropertybindingComponent {
  mydata: any;

name="ravi singh";
age:number=90;
names:string[]=[
  "kumar","mohan","pooja","salini","ravi","pandey"
];

students=[
  {
    name:'kumar',
    age:40,
    rollno:1
  },
  {
    name:'pooja',
    age:20,
    rollno:2
  },
  {
    name:'pankaj',
    age:30,
    rollno:3
  }
];
isnumber:boolean=true;
cusnumber:number=2;
cusnumber1:boolean=false;
numb:number=50;
numb1:number=80;

feepadi:boolean=false;

}
