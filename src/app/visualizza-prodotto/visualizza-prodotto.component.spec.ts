import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaProdottoComponent } from './visualizza-prodotto.component';

describe('VisualizzaProdottoComponent', () => {
  let component: VisualizzaProdottoComponent;
  let fixture: ComponentFixture<VisualizzaProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaProdottoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
