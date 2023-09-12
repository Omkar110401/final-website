import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTimelineComponent } from './short-timeline.component';

describe('ShortTimelineComponent', () => {
  let component: ShortTimelineComponent;
  let fixture: ComponentFixture<ShortTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
