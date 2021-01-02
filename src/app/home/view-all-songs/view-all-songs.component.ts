import { Component, OnInit } from '@angular/core';
import {AudioService} from '../../service/audio.service'
import {SongsService} from '../../service/songs.service'
import {datasong} from 'src/app/service/module/audio.module'

@Component({
  selector: 'app-view-all-songs',
  templateUrl: './view-all-songs.component.html',
  styleUrls: ['./view-all-songs.component.scss']
})
export class ViewAllSongsComponent implements OnInit {
  songData : datasong[]

  constructor(private songs: SongsService, private playsong : AudioService,) { }

  ngOnInit(){
    this.getsong('Punjabi')
  }

  getsong(x){
    this.songs.getsongs(x).subscribe(data => {
      this.songData = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as datasong
        } 
      })
    });
  }

}
