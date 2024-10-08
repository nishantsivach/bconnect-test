import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListComponent } from './menu-list.component';

describe('MenuListComponent', () => {
  let component: MenuListComponent;
  let fixture: ComponentFixture<MenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial currentItem as 6', () => {
    expect(component.currentItem).toBe(6);
  });

  it('should change currentItem when handleMenuItem is called', () => {
    const newId = 3;
    component.handleMenuItem(newId); // Simulate calling the method
    expect(component.currentItem).toBe(newId); // Check if currentItem is updated
  });

  it('should log the correct currentItem', () => {
    spyOn(console, 'log'); // Spy on console.log
    component.handleMenuItem(4); // Call the method
    expect(console.log).toHaveBeenCalledWith("check the item id", 4); // Check if log is correct
  });

});
