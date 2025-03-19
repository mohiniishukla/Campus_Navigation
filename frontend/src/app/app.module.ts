import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserManualComponent } from './user-manual/user-manual.component';
import { OurCollegeComponent } from './our-college/our-college.component';
import { ObjectiveComponent } from './objective/objective.component';
import { AcademicDepartmentComponent } from './academic-department/academic-department.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { MapComponent } from './map/map.component';
//import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutUsComponent,
    UserManualComponent,
    OurCollegeComponent,
    ObjectiveComponent,
    AcademicDepartmentComponent,
    HeaderComponent,
    FooterComponent,
    //MapComponent,
    // AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
