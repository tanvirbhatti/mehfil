import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LikedComponent } from './liked/liked.component';
import { ViewAllArtistComponent } from './view-all-artist/view-all-artist.component';
import { ViewAllSongsComponent } from './view-all-songs/view-all-songs.component';
import { ViewAllAlbumsComponent } from './view-all-albums/view-all-albums.component';

import {CardsModule} from '../cards/cards.module';
import { CarouselComponent } from './carousel/carousel.component';
import { ViewTabComponent } from './view-tab/view-tab.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component'



@NgModule({
  declarations: [HomeLayoutComponent, LikedComponent, ViewAllArtistComponent, ViewAllSongsComponent, ViewAllAlbumsComponent, CarouselComponent, ViewTabComponent, ViewPlaylistComponent],
  imports: [
    CommonModule,
    CardsModule
  ],
  exports:[
HomeLayoutComponent  ]
})

export class HomeModule { }
