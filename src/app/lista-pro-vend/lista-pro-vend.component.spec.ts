import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProVendComponent } from './lista-pro-vend.component';

describe('ListaProVendComponent', () => {
  let component: ListaProVendComponent;
  let fixture: ComponentFixture<ListaProVendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProVendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProVendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
