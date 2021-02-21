import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input === 'All') {
      return value;
    } else if (input) {
      return value.filter(val => val.language === input);
    } else {
      return value;
    }
  }
}
