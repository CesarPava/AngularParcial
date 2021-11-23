import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModificarOfertaComponent } from './crear-modificar-oferta.component';

describe('CrearModificarOfertaComponent', () => {
  let component: CrearModificarOfertaComponent;
  let fixture: ComponentFixture<CrearModificarOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearModificarOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearModificarOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
