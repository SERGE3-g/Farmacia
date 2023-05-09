import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaClienteComponent } from './visualizza-cliente.component';

describe('VisualizzaClienteComponent', () => {
  let component: VisualizzaClienteComponent;
  let fixture: ComponentFixture<VisualizzaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
