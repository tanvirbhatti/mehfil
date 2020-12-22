import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-tab',
  templateUrl: './view-tab.component.html',
  styleUrls: ['./view-tab.component.scss']
})
export class ViewTabComponent implements OnInit {
  // @Input() heading;
  // @Input() type;
data = {
 "heading" : 'Popular artist',
 'typedata' : [
   "artist" ,'playlist',"album",'album','artist','album'
 ]
}
  constructor() { }

  ngOnInit(): void {
  }

}
