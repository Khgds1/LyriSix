import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './pages/home/home.component';
import { ArtistsComponent} from './pages/artists/artists.component';
import { SongsComponent} from './pages/songs/songs.component';
import { ProfileComponent} from './pages/profile/profile.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'artists', component: ArtistsComponent},
  { path: 'songs', component: SongsComponent},
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
