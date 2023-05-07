import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatilsEmployeeComponent } from './deatils-employee.component';

describe('DeatilsEmployeeComponent', () => {
  let component: DeatilsEmployeeComponent;
  let fixture: ComponentFixture<DeatilsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatilsEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeatilsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
