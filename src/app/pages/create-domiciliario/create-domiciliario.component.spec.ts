import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDomiciliarioComponent } from './create-domiciliario.component';

describe('CreateDomiciliarioComponent', () => {
  let component: CreateDomiciliarioComponent;
  let fixture: ComponentFixture<CreateDomiciliarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDomiciliarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDomiciliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
