import { Component } from '@angular/core';
import { skillsData } from '../skills-maxim/skill-maxim-data';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  isModalVisible = false;
  skillsMaxim = skillsData;
  chosenSkills = ['Java', 'Python', 'MySQL', 'Azure'];
  filteredSkills = this.skillsMaxim.filter(skill => this.chosenSkills.includes(skill.name)).slice(0, 4);

  toggleSkillModal() {
    this.isModalVisible = !this.isModalVisible;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
