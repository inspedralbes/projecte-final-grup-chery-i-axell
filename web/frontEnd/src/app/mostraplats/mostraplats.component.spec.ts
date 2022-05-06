import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraplatsComponent } from './mostraplats.component';

describe('MostraplatsComponent', () => {
  let component: MostraplatsComponent;
  let fixture: ComponentFixture<MostraplatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraplatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraplatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
