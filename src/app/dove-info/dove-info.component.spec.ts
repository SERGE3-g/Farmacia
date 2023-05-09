import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoveInfoComponent } from './dove-info.component';

describe('DoveInfoComponent', () => {
  let component: DoveInfoComponent;
  let fixture: ComponentFixture<DoveInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoveInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
