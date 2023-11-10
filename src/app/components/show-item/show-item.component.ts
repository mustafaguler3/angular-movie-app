import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent {

  @Input() showItem : Movie | null = null

}
