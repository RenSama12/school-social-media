import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagesPageRoutingModule } from './messages-routing.module';

import { MessagesPage } from './messages.page';
import { ChatCardComponent } from '../components/chat-card/chat-card.component';
import { SharedModule } from '../shared/shared.module';
// import { AppModule } from '../app.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule,
    // AppModule
    SharedModule,
  ],
  declarations: [MessagesPage, ChatCardComponent],
})
export class MessagesPageModule {}
