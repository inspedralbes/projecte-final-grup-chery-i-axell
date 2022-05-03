import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaLocalComponent } from './comanda-local.component';

describe('ComandaLocalComponent', () => {
  let component: ComandaLocalComponent;
  let fixture: ComponentFixture<ComandaLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComandaLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandaLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
