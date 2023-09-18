import { Component, HostListener } from '@angular/core';
import { skills } from './skills-data';
import { skillsData } from '../skills-maxim/skill-maxim-data';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  skillsMaxim=skillsData;
  skillsData = skillsData.slice(0, 4);
}
