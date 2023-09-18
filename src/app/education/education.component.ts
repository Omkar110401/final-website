import { Component, HostListener } from '@angular/core';
import { academicData } from './education-data';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  academicData=academicData;
}
