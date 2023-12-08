import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-skill-modal',
  templateUrl: './skill-modal.component.html',
  styleUrls: ['./skill-modal.component.css']
})
export class SkillModalComponent {
  @Input() isModalVisible: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  toggleModal() {
    this.closeModal.emit();
  }
}
