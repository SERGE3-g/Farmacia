import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaClienteComponent } from './cerca-cliente.component';

describe('CercaClienteComponent', () => {
  let component: CercaClienteComponent;
  let fixture: ComponentFixture<CercaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercaClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CercaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
