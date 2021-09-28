import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { ShopComponent } from './shop/shop.component';
import { MadhuComponent } from './madhu/madhu.component';
import { CreateNewVaComponent } from './create-new-va/create-new-va.component'
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { FacebbokComponent } from './facebbok/facebbok.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [

{ path:'home',component:HomeComponent},
{ path:'features', component : FeaturesComponent},
{ path:'lovely', component:PricingComponent},
{ path :'shop', component :ShopComponent},
{path:'',component :HomeComponent},
{path :'madhu',component :MadhuComponent},
{path: 'create-new-va',component :CreateNewVaComponent},
{path: 'login',component :LoginComponent},
{path:'logout',component:LogoutComponent},
{path:'register',component:RegisterComponent},
{path:'facebook', component:FacebbokComponent},
{path:'help',component:HelpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }