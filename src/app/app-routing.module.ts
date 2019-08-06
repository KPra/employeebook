import { DashboardComponent } from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {TrackListComponent} from './track-list/track-list.component';

const routes: Routes = [
  { path: 'search', component: RecipesComponent},
  { path: 'track', component: TrackListComponent},
  { path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
