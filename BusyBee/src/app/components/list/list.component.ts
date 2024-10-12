import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IStatus } from 'src/app/state/models/status.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() list!: IStatus;
}
