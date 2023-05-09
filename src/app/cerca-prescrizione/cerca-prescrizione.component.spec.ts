import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaPrescrizioneComponent } from './cerca-prescrizione.component';

describe('CercaPrescrizioneComponent', () => {
  let component: CercaPrescrizioneComponent;
  let fixture: ComponentFixture<CercaPrescrizioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercaPrescrizioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CercaPrescrizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
