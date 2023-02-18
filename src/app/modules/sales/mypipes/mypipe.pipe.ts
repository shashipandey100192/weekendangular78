import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value:any): any {
  let oldyear:any = 1990;
  let curtear:any  = value; 
    return curtear-oldyear;
  }

}
