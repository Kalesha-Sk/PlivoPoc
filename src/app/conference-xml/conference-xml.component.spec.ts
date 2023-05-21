import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceXMLComponent } from './conference-xml.component';

describe('ConferenceXMLComponent', () => {
  let component: ConferenceXMLComponent;
  let fixture: ComponentFixture<ConferenceXMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceXMLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferenceXMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
