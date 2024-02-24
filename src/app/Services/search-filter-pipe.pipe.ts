import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return (item.incomeDescription && item.incomeDescription.toLowerCase().includes(searchText)) ||
             (item.expenseDescription && item.expenseDescription.toLowerCase().includes(searchText));
    });
  }
}
