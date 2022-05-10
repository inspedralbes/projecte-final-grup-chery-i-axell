import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambrerComponentComponent } from './cambrer-component.component';

describe('CambrerComponentComponent', () => {
  let component: CambrerComponentComponent;
  let fixture: ComponentFixture<CambrerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambrerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambrerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
