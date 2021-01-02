import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {playlist} from '../../service/module/audio.module'

@Component({
  selector: 'app-view-playlist',
  templateUrl: './view-playlist.component.html',
  styleUrls: ['./view-playlist.component.scss']
})
export class ViewPlaylistComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
 data
  ngOnInit() {
    this.data = JSON.parse(this.route.snapshot.params['data']);
    // this.data=JSON.parse(this.data)
    console.log(this.data)
  }

}
