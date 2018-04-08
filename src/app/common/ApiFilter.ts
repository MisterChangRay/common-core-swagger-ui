import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'apiFilter',
    pure: false
})
export class ApiFilter implements PipeTransform {
    transform(items2: any[], filter: String): any {
        if (!items2 || !filter) {
            return items2;
        }

        let items =JSON.parse(JSON.stringify(items2));

       let res = items.filter(function(item) {
            let filterKey = filter.toLocaleLowerCase();
            if(-1 != item.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase())
            ||-1 != item.description.toLocaleLowerCase().indexOf(filterKey)) {
                return true;
            }
            if(Array.isArray(item.childs)) {
                item.childs = item.childs.filter(function(item) {
                    if(-1 != item.summary.toLocaleLowerCase().indexOf(filterKey)
                    ||-1 != item.description.toLocaleLowerCase().indexOf(filterKey)) {
                        return true;
                    }
                })
                return item.childs.length
            }
       })
       return res;
    }
}