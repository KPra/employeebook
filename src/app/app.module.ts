import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemDetailComponent } from './recipes/recipe-item-detail/recipe-item-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import {PopoverModule} from 'ngx-popover';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatBadgeModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AppRoutingModule} from './app-routing.module';
import { TrackListComponent } from './track-list/track-list.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashinternalComponent } from './dashboard/dashinternal/dashinternal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    TrackListComponent,
    DashboardComponent,
    DashinternalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PopoverModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatTooltipModule,
    NgxChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
