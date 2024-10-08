import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelBodyComponent } from './channel-body.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

describe('ChannelBodyComponent', () => {
  let component: ChannelBodyComponent;
  let fixture: ComponentFixture<ChannelBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelBodyComponent, HttpClientModule, ToastrModule.forRoot()]
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
