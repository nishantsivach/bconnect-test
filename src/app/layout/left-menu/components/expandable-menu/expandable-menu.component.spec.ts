import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableMenuComponent } from './expandable-menu.component';

describe('ExpandableMenuComponent', () => {
  let component: ExpandableMenuComponent;
  let fixture: ComponentFixture<ExpandableMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandableMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
