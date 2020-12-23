import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {
  @Input() name;
  @Input() picUrl

  constructor() { }

  ngOnInit(): void {
  }

}
