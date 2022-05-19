import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTaulaComponent } from './admin-taula.component';

describe('AdminTaulaComponent', () => {
  let component: AdminTaulaComponent;
  let fixture: ComponentFixture<AdminTaulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTaulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTaulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
