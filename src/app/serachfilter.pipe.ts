import { Pipe, PipeTransform } from '@angular/core';
import { Features } from './features';
import { FeaturesComponent } from './features/features.component';

@Pipe({
  name: 'serachfilter'
})
export class SerachfilterPipe implements PipeTransform {

  transform( Personaldata:Features[], searchValue:string): Features[] {

    if(!Personaldata || !searchValue){
      return Personaldata;
    }
    return Personaldata.filter(data=>
      data.Name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.City.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.Surname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      data.Education.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      data.Mobile.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      data.Dob.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      
      );
  }

}
