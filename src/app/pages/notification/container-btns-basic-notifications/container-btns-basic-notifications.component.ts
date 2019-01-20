import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-container-btns-basic-notifications',
  templateUrl: './container-btns-basic-notifications.component.html',
  styleUrls: ['./container-btns-basic-notifications.component.scss']
})
export class ContainerBtnsBasicNotificationsComponent implements OnInit {

  constructor(private _notification: NotificationService) { }

  ngOnInit() {
  }
  /**
   * Show a default info notification
   */
  openBasicNotification() {
    this._notification.info('Hello World!');
  }
   /**
   * Show a default error notification
   */
  openErrNotification() {
    this._notification.error('Ups! that´s an error');
  }

}
