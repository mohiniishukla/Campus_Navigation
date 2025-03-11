import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CollegeInfoService } from 'src/service/college-info.service';
import { EventService } from 'src/service/event.service';
import { NavigationService } from 'src/service/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{
  collegeName:any='';
  affiliation:any='';
  accredetion:any='';
  contactEmail:any='';

  
  constructor(private navigationService: NavigationService,
    private collegeInfoService: CollegeInfoService,
    private eventService: EventService
  ){}

  ngOnInit() {
  //   this.navigationService.getRoute().subscribe((response)=>{
  //     // console.log(response,"response")
  //   });

  //   this.collegeInfoService.fetchCollegeDetails().subscribe(
  //     (response:any)=>{
  //     const collegeinfo = response[0];
  //     [this.collegeName, this.affiliation, this.accredetion, this.contactEmail] = [collegeinfo?.name, collegeinfo?.affiliation, collegeinfo?.accreditation, collegeinfo?.contactEmail];
  //     console.log(this.collegeName,"college name")
  //   },
  //   (error)=>{
  //     console.log(error,"error")
  //   })
  }
}
