import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {TrackListComponent} from './track-list/track-list.component';

const routes: Routes = [
  { path: 'search', component: RecipesComponent},
  { path: 'track', component: TrackListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
