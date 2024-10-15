import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent implements AfterViewInit {
  @Input() hideLoader = false;

  bees = new Array(15);

  ngAfterViewInit(): void {
    this.setBees();
  }

  setBees(): void {
    const bees = document.querySelectorAll('.bee');
    bees.forEach((bee: Element) => {
      if (bee instanceof HTMLElement) {
        const size = Math.floor(Math.random() * (100 - 50 + 1) + 50) + 'px';

        bee.style.width = size;
        bee.style.height = size;
        bee.style.top = `calc(${Math.random() * 100 + '%'} - ${size})`;
        bee.style.left = `calc(${Math.random() * 100 + '%'} - ${size})`;
      }
    });
  }
}
