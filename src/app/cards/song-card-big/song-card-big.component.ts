import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-song-card-big',
  templateUrl: './song-card-big.component.html',
  styleUrls: ['./song-card-big.component.scss']
})
export class SongCardBigComponent implements OnInit {
@Input() data
  constructor() { }

  ngOnInit(): void {
  }

}
