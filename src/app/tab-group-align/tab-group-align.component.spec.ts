import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupAlignComponent } from './tab-group-align.component';

describe('TabGroupAlignComponent', () => {
  let component: TabGroupAlignComponent;
  let fixture: ComponentFixture<TabGroupAlignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGroupAlignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabGroupAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
