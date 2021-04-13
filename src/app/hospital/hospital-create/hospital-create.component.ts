import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalService } from '../../hospital/hospital.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Hospital } from '../../hospital/hospital.model';
import { ReviewsService } from 'src/app/reviews/review.service';

@Component({
  selector: 'app-hospita-create',
  templateUrl: './hospital-create.component.html',
  styleUrls: ['./hospital-create.component.css']
})
export class HospitalCreateComponent implements OnInit {
  enteredname = '';
  enteredstate = '';
  private mode = 'create';
  private hospitalId: string;
  hospital: Hospital;
  hospitalTitleInput = '';

  constructor(public hospitalService: HospitalService, public reviewsService: ReviewsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('hospitalId')) {
        this.mode = 'addingReview';
        this.hospitalId = paramMap.get('hospitalId');
        this.hospital = this.hospitalService.getHospital(this.hospitalId);
      } else {
        this.mode = 'list';
      }
    });
  }

  onAddHospital(form: NgForm) {
    if (form.invalid) { return; }
    // form values passed to addHotel function in service ts file
    this.hospitalService.addHospital(form.value.title,
       form.value.name,
        form.value.state,
        form.value.district,
        form.value.fee,
        form.value.description,
        form.value.rating,
        form.value.type,
        form.value.zeroByte
        );
    form.resetForm();
  }

  onAddReview(form: NgForm) {
    if (form.invalid) { return; }
    this.reviewsService.addReview(form.value.rating, form.value.review, form.value.title,form.value.username );
    form.resetForm();
  }
}

