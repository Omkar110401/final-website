import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsMaximComponent } from './skills-maxim.component';

describe('SkillsMaximComponent', () => {
  let component: SkillsMaximComponent;
  let fixture: ComponentFixture<SkillsMaximComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsMaximComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsMaximComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
