import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent implements OnInit {
@Input() data
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  navigateto(x){
    this.route.navigate(['/viewplaylist', JSON.stringify(x)]);
    // console.log(this.data)
    // console.log(x)
  }

}
