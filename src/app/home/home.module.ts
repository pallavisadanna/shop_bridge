import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AddItemComponent } from './add-item/add-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    MovieCardComponent,
    HeaderComponent,
    AddItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
