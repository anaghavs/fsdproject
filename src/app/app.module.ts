import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// all imports made here
import { AppComponent } from './app.component';
import {HospitalCreateComponent} from './hospital/hospital-create/hospital-create.component';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule ,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
 } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
//import { HotelListComponent } from './hotels/hotel-list/hotel-list.component';
import { ReviewCreateComponent } from './reviews/review-create/review-create.component';
//import { HotelFilterPipe } from './hotels/hotel-list/hotel-filter.pipe';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { AuthInterceptor } from './user/auth-interceptor';
import { AddAdminComponent } from './user/addAdmin/addAdmin.component';
import { PrivacyPolicyComponent } from './user/policies/policy.component';
import { DmcaComponent } from './user/dmca/dmca.component';
import { TakedownProcComponent } from './user/takedownProc/takedown-proc.component';
import { DeactivateComponent } from './user/deactivate/deactivate.component';
//import { HospitalCreateComponent } from './hospital/hospital-create/hospital-create.component';
//import { HospitalListPipe } from './hospital/hospital-list.pipe';
import { HospitalListComponent } from './hospital/hospital-list/hospital-list.component';
import { HospitalFilterPipe } from './hospital/hospital-list/hospital-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    //HotelCreateComponent,
    HeaderComponent,
    //HotelListComponent,
    ReviewCreateComponent,
    //HotelFilterPipe,
    LoginComponent,
    SignupComponent,
    AddAdminComponent,
    PrivacyPolicyComponent,
    DmcaComponent,
    TakedownProcComponent,
    DeactivateComponent,
    //HospitalListPipe,
    HospitalCreateComponent,
    HospitalListComponent,
    HospitalFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
