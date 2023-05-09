import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciPrescrizioneComponent } from './inserisci-prescrizione.component';

describe('InserisciPrescrizioneComponent', () => {
  let component: InserisciPrescrizioneComponent;
  let fixture: ComponentFixture<InserisciPrescrizioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserisciPrescrizioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserisciPrescrizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
