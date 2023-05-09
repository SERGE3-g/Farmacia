import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaProdottoComponent } from './cerca-prodotto.component';

describe('CercaProdottoComponent', () => {
  let component: CercaProdottoComponent;
  let fixture: ComponentFixture<CercaProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercaProdottoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CercaProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
