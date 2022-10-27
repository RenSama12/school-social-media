import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PostCardComponent } from '../components/post-card/post-card.component';
import { SharedModule } from '../shared/shared.module';
// import { AppModule } from '../app.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // AppModule,
    SharedModule,
  ],
  declarations: [HomePage, PostCardComponent],
})
export class HomePageModule {}
