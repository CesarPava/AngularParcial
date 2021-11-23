import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModificarMetodoPagoComponent } from './crear-modificar-metodo-pago.component';

describe('CrearModificarMetodoPagoComponent', () => {
  let component: CrearModificarMetodoPagoComponent;
  let fixture: ComponentFixture<CrearModificarMetodoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearModificarMetodoPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearModificarMetodoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
