import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserManualComponent } from './user-manual/user-manual.component';
import { OurCollegeComponent } from './our-college/our-college.component';
import { ObjectiveComponent } from './objective/objective.component';
import { AcademicDepartmentComponent } from './academic-department/academic-department.component';
/*import { MapComponent } from './map/map.component';*/

const routes: Routes = [
  {
    path:'aboutus',
    component:AboutUsComponent
  },
  {
    path:'usermanual',
    component:UserManualComponent
  },
  {
    path:'aboutus/ourcollege',
    component:OurCollegeComponent
  },
  {
    path:'aboutus/objective',
    component:ObjectiveComponent
  },
  {
    path:'',
    component:NavigationComponent
  },
  /*{ path: 'map', 
    component: MapComponent },*/
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
