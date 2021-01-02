import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {
  @Input() data;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  navigateto(x){
    this.route.navigate(['/viewplaylist', JSON.stringify(x)]);
    // console.log(this.data)
    // console.log(x)
  }

}
