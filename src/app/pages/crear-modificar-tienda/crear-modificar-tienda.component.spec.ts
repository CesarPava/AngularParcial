import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModificarTiendaComponent } from './crear-modificar-tienda.component';

describe('CrearModificarTiendaComponent', () => {
  let component: CrearModificarTiendaComponent;
  let fixture: ComponentFixture<CrearModificarTiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearModificarTiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearModificarTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
