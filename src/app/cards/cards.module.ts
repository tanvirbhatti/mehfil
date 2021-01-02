import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { SongCardComponent } from './song-card/song-card.component';
import { PlaylistCardComponent } from './playlist-card/playlist-card.component';
import { SongCardBigComponent } from './song-card-big/song-card-big.component';
import { PlaylistSongCardComponent } from './playlist-song-card/playlist-song-card.component';
import { Router, RouterModule } from '@angular/router';




@NgModule({
  declarations: [ArtistCardComponent, AlbumCardComponent, SongCardComponent, PlaylistCardComponent, SongCardBigComponent, PlaylistSongCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ArtistCardComponent,
    AlbumCardComponent,
    SongCardComponent,
    PlaylistCardComponent,
    SongCardBigComponent,
    PlaylistSongCardComponent
  ]
})
export class CardsModule { }
