import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalListComponent } from './hospital/hospital-list/hospital-list.component';
import { HospitalCreateComponent } from './hospital/hospital-create/hospital-create.component';
import { ReviewCreateComponent } from './reviews/review-create/review-create.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { AuthGuard } from './user/auth.guard';
import { AddAdminComponent } from './user/addAdmin/addAdmin.component';
import { PrivacyPolicyComponent } from './user/policies/policy.component';
import { DmcaComponent } from './user/dmca/dmca.component';
import { TakedownProcComponent } from './user/takedownProc/takedown-proc.component';
import { DeactivateComponent } from './user/deactivate/deactivate.component';

// different routes defined here
const routes: Routes = [
  { path: '', component: HospitalListComponent },
  { path: 'create', component: HospitalCreateComponent, },
  { path: 'review-create/:hotelId', component: ReviewCreateComponent,},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add-admin', component: AddAdminComponent},
  { path: 'policy', component: PrivacyPolicyComponent},
  { path: 'dmca', component: DmcaComponent},
  { path: 'takedown', component: TakedownProcComponent},
  { path: 'deactivate', component: DeactivateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule {}
