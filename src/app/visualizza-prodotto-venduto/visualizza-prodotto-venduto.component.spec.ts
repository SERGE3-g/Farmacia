import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaProdottoVendutoComponent } from './visualizza-prodotto-venduto.component';

describe('VisualizzaProdottoVendutoComponent', () => {
  let component: VisualizzaProdottoVendutoComponent;
  let fixture: ComponentFixture<VisualizzaProdottoVendutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaProdottoVendutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaProdottoVendutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
