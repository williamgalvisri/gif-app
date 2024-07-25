import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import {  provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardBoxComponent],
  imports: [
    CommonModule,
  ],
  providers:[provideHttpClient()],
  exports: [HomePageComponent]
})
export class GifsModule { }
