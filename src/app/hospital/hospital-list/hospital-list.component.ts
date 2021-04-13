import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hospital } from '../hospital.model';
import { HospitalService } from '../hospital.service';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/reviews/review.model';
import { ReviewsService } from 'src/app/reviews/review.service';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit, OnDestroy {
 searchWord: string;
 hospital: Hospital[] = [];
 reviews: Review[] = [];
 userIsAuthenticated = false;
 adminIsAuthenticated = false;
 public reviewsSub: Subscription;
 private hospitalSub: Subscription;
 private authStatusSub: Subscription;
 private adminAuthStatusSub: Subscription;
 // panelOpenState: boolean = false;

 constructor(public hospitalService: HospitalService, public reviewsService: ReviewsService, private authService: AuthService) {}

 ngOnInit() {
   // fetching all hotels upon page init
   this.hospitalService.getHospitall();
   this.hospitalSub = this.hospitalService.getHospitalUpdateListener()
  .subscribe((hospital: Hospital[]) => {
    this.hospital = hospital;
  });
  // fetching all existing reviews upon page init
   this.reviewsService.getReviews();
   this.reviewsSub = this.reviewsService.getReviewUpdateListener()
 .subscribe((reviews: Review[]) => {
   this.reviews = reviews;
 });
  // getting user authorization level upon page init
   this.userIsAuthenticated = this.authService.getIsAuth();
   this.authStatusSub = this.authService.getAuthStatusListener()
   .subscribe(isAuthenticated => {
    this.userIsAuthenticated = isAuthenticated;
   });

   this.adminIsAuthenticated = this.authService.getIsAdminAuth();
   this.adminAuthStatusSub = this.authService.getAdminAuthStatusListener()
   .subscribe(isAuthenticated => {
    this.adminIsAuthenticated = isAuthenticated;
   });
 }

 onDelete(hospitalId: string) {
  this.hospitalService.deleteHospital(hospitalId);
 }

 ngOnDestroy() {
   this.hospitalSub.unsubscribe();
   this.authStatusSub.unsubscribe();
 }
}
