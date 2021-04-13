import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReviewsService } from '../review.service';
import { HospitalCreateComponent } from '../../hospital/hospital-create/hospital-create.component';
import { Hospital } from '../../hospital/hospital.model';
import { HospitalService } from '../../hospital/hospital.service';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css']
})

export class ReviewCreateComponent {

  constructor(public reviewsService: ReviewsService, public hospitalService: HospitalService) {}
  hospital: Hospital;


  onAddReview(form: NgForm) {
    if (form.invalid) { return; }
    this.reviewsService.addReview(form.value.rating, form.value.review, form.value.title, form.value.username);
    form.resetForm();
  }
}
