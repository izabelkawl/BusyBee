import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Output() btnClicked: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  onButtonClick(event: Event): void {
    event.preventDefault();
    this.btnClicked.emit(true);
  }
}
