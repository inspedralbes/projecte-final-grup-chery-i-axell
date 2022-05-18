import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiquetComponent } from './tiquet.component';

describe('TiquetComponent', () => {
  let component: TiquetComponent;
  let fixture: ComponentFixture<TiquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiquetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
