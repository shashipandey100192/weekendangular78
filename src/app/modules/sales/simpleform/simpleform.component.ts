import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.scss']
})
export class SimpleformComponent {



mysubmit(xyz:NgForm):void
{
console.log(xyz.value);

}



}
