import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { FormNotificationComponent } from './form-notification/form-notification.component';
import { ContainerBtnsBasicNotificationsComponent } from './container-btns-basic-notifications/container-btns-basic-notifications.component';


@NgModule({
  declarations: [NotificationComponent, FormNotificationComponent, ContainerBtnsBasicNotificationsComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class NotificationModule { }
