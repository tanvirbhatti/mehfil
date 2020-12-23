import { Component, OnInit } from '@angular/core';
import {AudioService} from '../../service/audio.service'
import {SongsService} from '../../service/songs.service'
import {datasong} from 'src/app/service/module/policy.model'

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent implements OnInit {

  constructor( private songs: SongsService, private playsong : AudioService,) { }

  ispalying = false;
  songData : datasong[]

  ngOnInit() {
    this.songs.getsongs().subscribe(data => {
      this.songData = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as datasong;
      })
    });
    // console.log(songData)
  }
  playAudio(){
    this.playsong.setAudio("http://s48.ve.vc/data/48/49150/296694/Temporary%20Pyar%20-%20Adaab%20Kharoud%20(DjPunjab.Com).mp3")

    if(this.ispalying == false){
      this.playsong.playAudio()
      this.ispalying = true;
    }
    else{
      this.playsong.pauseAudio()
      this.ispalying = false;
    }
  }

}
