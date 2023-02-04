
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})
export class MypageComponent {

  mytext:string="kumar singh";
  // mydate=Date();
  mydate=Date.now();
  price:number=500;
  marks=50;

  myvalue=0;
}
