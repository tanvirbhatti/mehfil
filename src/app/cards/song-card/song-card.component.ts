import { Component, Input, OnInit } from '@angular/core';
import {AudioService} from '../../service/audio.service'

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent implements OnInit {

  constructor(  private playsong : AudioService,) { }

  ispalying = false;

  @Input() data;

  ngOnInit() {
    
    // console.log(songData)
  }
  playAudio(){
    this.playsong.setAudio(this.data.songUrl)

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
