import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaPrescrizioneComponent } from './visualizza-prescrizione.component';

describe('VisualizzaPrescrizioneComponent', () => {
  let component: VisualizzaPrescrizioneComponent;
  let fixture: ComponentFixture<VisualizzaPrescrizioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaPrescrizioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaPrescrizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
