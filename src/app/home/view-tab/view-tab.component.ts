import { Component, OnInit, Input } from '@angular/core';
import {SongsService} from '../../service/songs.service'
import {groupdata,datagroup }from '../../service/module/audio.module'

@Component({
  selector: 'app-view-tab',
  templateUrl: './view-tab.component.html',
  styleUrls: ['./view-tab.component.scss']
})
export class ViewTabComponent implements OnInit {
  @Input() heading;
  data : groupdata[]
  dataGroup:datagroup[]
// data = {
//  "heading" : 'Popular artist',
//  'typedata' : [
//    "artist" ,'playlist',"album",'album','artist','album'
//  ]
// }
  constructor(private Groupdata:SongsService) { }

  ngOnInit() {
    this.Groupdata.getgroup(this.heading).subscribe(Data => {
      this.data = Data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as groupdata
        } 
      })
    });
  }

}
