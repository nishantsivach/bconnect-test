import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelBodyComponent } from './channel-body.component';

describe('ChannelBodyComponent', () => {
  let component: ChannelBodyComponent;
  let fixture: ComponentFixture<ChannelBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
