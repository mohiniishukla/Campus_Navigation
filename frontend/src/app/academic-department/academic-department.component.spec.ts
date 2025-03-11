import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicDepartmentComponent } from './academic-department.component';

describe('AcademicDepartmentComponent', () => {
  let component: AcademicDepartmentComponent;
  let fixture: ComponentFixture<AcademicDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
