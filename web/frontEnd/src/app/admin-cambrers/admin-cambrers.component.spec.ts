import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCambrersComponent } from './admin-cambrers.component';

describe('AdminCambrersComponent', () => {
  let component: AdminCambrersComponent;
  let fixture: ComponentFixture<AdminCambrersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCambrersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCambrersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
