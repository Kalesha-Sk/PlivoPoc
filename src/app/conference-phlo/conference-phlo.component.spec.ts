import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencePhloComponent } from './conference-phlo.component';

describe('ConferenceComponent', () => {
  let component: ConferencePhloComponent;
  let fixture: ComponentFixture<ConferencePhloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferencePhloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferencePhloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
