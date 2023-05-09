import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciProdottoVendutoComponent } from './inserisci-prodotto-venduto.component';

describe('InserisciProdottoVendutoComponent', () => {
  let component: InserisciProdottoVendutoComponent;
  let fixture: ComponentFixture<InserisciProdottoVendutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserisciProdottoVendutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserisciProdottoVendutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
