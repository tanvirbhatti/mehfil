import { Component, OnInit } from '@angular/core';
import {AudioService} from '../../audio.service'

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent implements OnInit {

  constructor(private song : AudioService) { }

  ispalying = false;

  ngOnInit(): void {
  }
  playAudio(){
    this.song.setAudio("./assets/Banned - Ranjit Bawa (DjPunjab.Com).mp3")
    // this.song.toggleAudio()
    // let audio = new Audio();
    // audio.src = "./assets/Banned - Ranjit Bawa (DjPunjab.Com).mp3";
    // audio.load();

    if(this.ispalying == false){
      this.song.playAudio()
      this.ispalying = true;
    }
    else{
      this.song.pauseAudio()
      this.ispalying = false;
    }
  }
  
  // var player = document.querySelector("video");
//   progressBar = document.querySelector("progress");
//   progressBar.addEventListener("click", this.seek);
  
//  seek(e) {
//       var percent = e.offsetX / this.offsetWidth;
//       // player.currentTime = percent * player.duration;
//       progressBar.value = percent / 100;
//   }
}
