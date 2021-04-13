import { PipeTransform, Pipe } from '@angular/core';
import { of } from 'rxjs';
import { Hospital } from '../hospital.model';

@Pipe({
  name: 'hospitalFilter'
})
export class HospitalFilterPipe implements PipeTransform {
  // first arg might need to be the string of hospital
  transform(hospital: Hospital[], searchTerm: any): Hospital[] {
    if (!hospital || !searchTerm) {
      return hospital;
    }
    // filters applied to the hospital array
    return hospital.filter(hospital =>
       (hospital.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) ||
        (hospital.state.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) ||
        (hospital.district.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) ||
        (hospital.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) ||
        (hospital.rating.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)  ||
        (hospital.type.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) ||
        (hospital.fee.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));
  }
}
