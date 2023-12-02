import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthGuard } from './services/auth.guard';
;

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent},
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "hotel", component: HotelComponent, canActivate: [AuthGuard] },
  { path: "payment", component: PaymentComponent, canActivate: [AuthGuard] },
  { path: "contact", component: ContactComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
