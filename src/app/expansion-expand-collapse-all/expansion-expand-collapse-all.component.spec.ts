import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionExpandCollapseAllComponent } from './expansion-expand-collapse-all.component';

describe('ExpansionExpandCollapseAllComponent', () => {
  let component: ExpansionExpandCollapseAllComponent;
  let fixture: ComponentFixture<ExpansionExpandCollapseAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionExpandCollapseAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionExpandCollapseAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
