import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarComandaComponent } from './comprar-comanda.component';

describe('ComprarComandaComponent', () => {
  let component: ComprarComandaComponent;
  let fixture: ComponentFixture<ComprarComandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarComandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarComandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
