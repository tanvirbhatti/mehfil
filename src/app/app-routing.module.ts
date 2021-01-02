import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeLayoutComponent} from './home/home-layout/home-layout.component';
import {ViewAllAlbumsComponent} from './home/view-all-albums/view-all-albums.component';
import {ViewAllArtistComponent} from './home/view-all-artist/view-all-artist.component';
import {LikedComponent} from './home/liked/liked.component';
import {ViewAllSongsComponent} from './home/view-all-songs/view-all-songs.component';
import {ViewPlaylistComponent} from './home/view-playlist/view-playlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeLayoutComponent },
  { path:'viewallsongs',component:ViewAllSongsComponent },
  { path:'viewallalbums',component:ViewAllAlbumsComponent },
  { path:'viewallartist', component:ViewAllArtistComponent},
  {path:'liked', component:LikedComponent},
  {path:'viewplaylist', component:ViewPlaylistComponent},
  {path:'viewplaylist/:data', component:ViewPlaylistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
