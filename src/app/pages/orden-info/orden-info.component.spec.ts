import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenInfoComponent } from './orden-info.component';

describe('OrdenInfoComponent', () => {
  let component: OrdenInfoComponent;
  let fixture: ComponentFixture<OrdenInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
