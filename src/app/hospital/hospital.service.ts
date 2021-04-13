import { Hospital } from './hospital.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class HospitalService {
  private hospital: Hospital[] = [];
  private hospitalUpdated = new Subject<Hospital[]>();

constructor(private http: HttpClient, private router: Router) {}

  // retrieves all hospital from database
  getHospitall() {
    this.http.get<{message: string, hospital: any}>(
      'http://localhost:3000/api/hotels'
      )
      .pipe(map((hospitallData) => {
        return hospitallData.hospital.map(hospital => {
          return {
            id: hospital._id,
            name: hospital.name,
            header: hospital.header,
            state: hospital.state,
            district: hospital.district,
            zeroByte: hospital.zeroByte,
            fee: hospital.fee,
            description: hospital.description,
            type: hospital.type,
            rating: hospital.rating
          };
        });
      }))
    .subscribe((updatedHospital) => {
      this.hospital = updatedHospital;
      this.hospitalUpdated.next([...this.hospital]);
    });
  }

  getHospitalUpdateListener() {
    return this.hospitalUpdated.asObservable();
  }

  // returns hospital based on id from the front-end collection of hospital
  getHospital(id: string) {
    return {...this.hospital.find(s => s.id === id)};
  }

  // adds a hospital to the db by sending a request
  addHospital(name: string, state: string, district: string, fee: string,
          description: string, type: string, rating: string, header: string, zeroByte: string) {

    const hospital: Hospital = {id: null, name:name, state: state, district: district, fee: fee, description: description,
       type: type, rating: rating, header: header, zeroByte: zeroByte};
       
    this.http.post<{message: string, hospitalId: string}>('http://localhost:3000/api/hospital', hospital)
    .subscribe((responseData) => {
      const id = responseData.hospitalId;
      hospital.id = id;
      this.hospital.push(hospital);
      this.hospitalUpdated.next([...this.hospital]);
    });
  }

  // to remove hospital
  deleteHospital(hospitalId: string) {
    this.http.delete('http://localhost:3000/api/hospital/' + hospitalId)
    .subscribe(() => {
      const updatedHospital = this.hospital.filter(hospital => hospital.id !== hospitalId);
      this.hospital = updatedHospital;
      this.hospitalUpdated.next([...this.hospital]);
    });
  }
}
