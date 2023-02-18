import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AddressComponent } from './component/address/address.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditAddressComponent } from './component/edit-address/edit-address.component';
import { LoginComponent } from './component/login/login.component';
import { OrdersComponent } from './component/orders/orders.component';
import { ProductSingleComponent } from './component/product-single/product-single.component';
import { ShopComponent } from './component/shop/shop.component';
import { SignupComponent } from './component/signup/signup.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ProfileDetailsComponent } from './component/profile-details/profile-details.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { OrderComponent } from './component/order/order.component';

const routes: Routes = [
  {path : "",component:HomeComponent},
  {path :"address",component:AddressComponent},
  {path :"cart",component:CartComponent},
  {path :"checkout",component:CheckoutComponent},
  {path :"dashboard",component:DashboardComponent},
  {path :"edit-address",component:EditAddressComponent},
  {path :"login",component:LoginComponent},
  {path :"orders",component:OrdersComponent},
  {path :"product-single",component:ProductSingleComponent},
  {path :"shop",component:ShopComponent},
  {path :"signup",component:SignupComponent},
  {path :"contact",component:ContactComponent},
  {path :"about-us",component:AboutUsComponent},
  {path :"profile-details",component:ProfileDetailsComponent},
  {path:"forget-password",component:ForgotPasswordComponent},
  {path:"order",component:OrderComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
