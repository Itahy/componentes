import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarPositionComponent } from './snack-bar-position.component';

describe('SnackBarPositionComponent', () => {
  let component: SnackBarPositionComponent;
  let fixture: ComponentFixture<SnackBarPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackBarPositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
