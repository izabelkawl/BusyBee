import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IStatus } from 'src/app/state/models/status.model';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss',
})
export class ListsComponent {
  @Input() list!: IStatus;
}
