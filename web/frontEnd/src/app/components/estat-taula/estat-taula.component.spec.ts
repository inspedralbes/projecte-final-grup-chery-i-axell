import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatTaulaComponent } from './estat-taula.component';

describe('EstatTaulaComponent', () => {
  let component: EstatTaulaComponent;
  let fixture: ComponentFixture<EstatTaulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatTaulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatTaulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
