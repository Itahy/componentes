import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconOverviewExampleComponent } from './icon-overview-example.component';

describe('IconOverviewExampleComponent', () => {
  let component: IconOverviewExampleComponent;
  let fixture: ComponentFixture<IconOverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconOverviewExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
