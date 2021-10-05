import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { ShopComponent } from './shop/shop.component';
import { MadhuComponent } from './madhu/madhu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent} from  './employees/employee/employee.component';
import {MaterialModule  } from "./material/material.module"
import { EmployeeService } from './shared/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { CreateNewVaComponent } from './create-new-va/create-new-va.component';
import { SerachfilterPipe } from './serachfilter.pipe';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { FacebbokComponent } from './facebbok/facebbok.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HelpComponent } from './help/help.component';
import { SivaComponent } from './siva/siva.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    ShopComponent,
    MadhuComponent,
    EmployeesComponent,
    EmployeeComponent,
    CreateNewVaComponent,
    CreateNewVaComponent,
    SerachfilterPipe,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    FacebbokComponent,
    HelpComponent,
    SivaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
