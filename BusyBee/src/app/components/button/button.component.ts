import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  
  @Output() btnClicked: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  public onButtonClick(event: Event): void {
    event.preventDefault();
    this.btnClicked.emit(true);
  }
}
