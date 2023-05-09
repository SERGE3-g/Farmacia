import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciProdottoComponent } from './inserisci-prodotto.component';

describe('InserisciProdottoComponent', () => {
  let component: InserisciProdottoComponent;
  let fixture: ComponentFixture<InserisciProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserisciProdottoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserisciProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
