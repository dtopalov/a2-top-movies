import { Component, Input } from '@angular/core';

@Component({
  selector: 'ac-stars',
  template: `
    <div class="stars">
      <ac-star
        *ngFor="let star of stars"
        [active]="star <= rating"
        [position]="star"
      >
      </ac-star>
    </div>
  `,
})
export class AcStars {
  @Input() starCount: number;
  @Input() rating: number;

  stars: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }
}
