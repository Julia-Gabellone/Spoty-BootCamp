import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
  ]
})
export class SharedModule { }
