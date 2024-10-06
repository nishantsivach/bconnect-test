import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelTabsComponent } from './channel-tabs.component';

describe('ChannelTabsComponent', () => {
  let component: ChannelTabsComponent;
  let fixture: ComponentFixture<ChannelTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
