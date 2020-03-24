import {Pipe, PipeTransform} from '@angular/core';
import {Case} from 'src/app/api.model';

const sortByCallback = (sortBy: string): any => (a: Case, b: Case) => {
  if (!a.hasOwnProperty(sortBy)) {
    throw new Error(`Field ${sortBy} doesn't exists`);
  }
  return b[sortBy] - a[sortBy];
};

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(
    items: any[],
    searchText: string,
    sortBy: string,
  ): any[] {
    let cleanedItems: any[] = items || [];
    if (sortBy) {
      cleanedItems = cleanedItems.sort(sortByCallback(sortBy));
    }
    if (searchText) {
      cleanedItems = cleanedItems.filter(it => {
        return it.countryRegion.toLowerCase().includes(searchText.toLowerCase());
      });
    }

    return cleanedItems;
  }
}
