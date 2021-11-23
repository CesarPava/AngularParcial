import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModificarProductoComponent } from './crear-modificar-producto.component';

describe('CrearModificarProductoComponent', () => {
  let component: CrearModificarProductoComponent;
  let fixture: ComponentFixture<CrearModificarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearModificarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearModificarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
