import { Component, OnInit } from '@angular/core';
import {SongsService} from '../../service/songs.service'
import {artist} from 'src/app/service/module/audio.module'

@Component({
  selector: 'app-view-all-artist',
  templateUrl: './view-all-artist.component.html',
  styleUrls: ['./view-all-artist.component.scss']
})
export class ViewAllArtistComponent implements OnInit {

  artistdata: artist[]


  constructor(private getartistdata:SongsService) { }

  ngOnInit(){
    this.artists('Punjabi')
  }
   artists(x){
    this.getartistdata.getartist(x).subscribe(data => {
      this.artistdata = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()  as artist
        }
      })
    });
   }
}
