import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCampaignComponent } from './card-campaign.component';

describe('CardCampaignComponent', () => {
  let component: CardCampaignComponent;
  let fixture: ComponentFixture<CardCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
