import { Component, OnInit } from '@angular/core';
import {playlist,datasong,artist} from '../../service/module/audio.module'
import {SongsService} from '../../service/songs.service'

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  playlistData:playlist[]
  songdata:datasong[]
  songdata2:datasong[]
  Artistdata:artist[]
  playlistdata:playlist[]

  constructor(private Playlist : SongsService) { }

  ngOnInit() {
    this.getPlaylist('New Release')
    this.getgroupdata('Trending artist')
    this.getgroupdatasongs('Recommended Songs')
    this.getgroupdataplaylist('You may like')
  }
getPlaylist(x){
  this.Playlist.getplaylist(x).subscribe(data => {
    this.playlistData = data.map(e => {
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data() as playlist
      } 
    })
  });
  this.Playlist.getsong(x).subscribe(data => {
    this.songdata = data.map(e => {
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data() as datasong
      } 
    })
  });
  // console.log(this.songdata,this.playlistData)
}
getgroupdata(x){
  this.Playlist.getgroup(x).subscribe(Data => {
    this.Artistdata = Data.map(e => {
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data() as artist
      } 
    })
  });
}
getgroupdatasongs(x){
  this.Playlist.getgroup(x).subscribe(Data => {
    this.songdata2 = Data.map(e => {
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data() as datasong
      } 
    })
  });
}
getgroupdataplaylist(x){
  this.Playlist.getgroup(x).subscribe(Data => {
    this.playlistdata = Data.map(e => {
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data() as playlist
      } 
    })
  });
}

}
