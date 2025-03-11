import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCollegeComponent } from './our-college.component';

describe('OurCollegeComponent', () => {
  let component: OurCollegeComponent;
  let fixture: ComponentFixture<OurCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCollegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
