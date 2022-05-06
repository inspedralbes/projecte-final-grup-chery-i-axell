import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfegirPlatsComponent } from './afegir-plats.component';

describe('AfegirPlatsComponent', () => {
  let component: AfegirPlatsComponent;
  let fixture: ComponentFixture<AfegirPlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfegirPlatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfegirPlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
