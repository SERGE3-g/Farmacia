import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaComunaleComponent } from './farmacia-comunale.component';

describe('FarmaciaComunaleComponent', () => {
  let component: FarmaciaComunaleComponent;
  let fixture: ComponentFixture<FarmaciaComunaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmaciaComunaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmaciaComunaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
