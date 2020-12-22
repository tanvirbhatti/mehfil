import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PlayerComponent } from './player/player.component';



@NgModule({
  declarations: [LayoutComponent, SidenavbarComponent, SearchBarComponent, PlayerComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    LayoutComponent,
  ]
})
export class CoreModule { }
