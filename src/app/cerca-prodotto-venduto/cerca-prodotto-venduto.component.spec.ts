import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaProdottoVendutoComponent } from './cerca-prodotto-venduto.component';

describe('CercaProdottoVendutoComponent', () => {
  let component: CercaProdottoVendutoComponent;
  let fixture: ComponentFixture<CercaProdottoVendutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercaProdottoVendutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CercaProdottoVendutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
