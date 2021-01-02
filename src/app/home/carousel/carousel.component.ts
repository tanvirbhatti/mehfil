import { Component, OnInit } from '@angular/core';
import {playlist,datasong} from '../../service/module/audio.module'
import {SongsService} from '../../service/songs.service'


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  songdata: datasong[]

  constructor(private Playlist : SongsService) { }

  ngOnInit(){
    this.Playlist.getsong('Trending Now').subscribe(data => {
      this.songdata = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as datasong
        } 
      })
    });
  }

}
