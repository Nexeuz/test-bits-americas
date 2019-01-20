import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _toast: ToastrService) { }
  /**
   * Encapsule toast and show an info notification
   * @param message message to show to user
   */
  info(message: string) {
    this._toast.info(message);
  }
  /**
   * Encapsule toast and show an error notification
   * @param message message to show to user
   */
  error(message: string) {
    this._toast.error(message);
  }
  /**
   * Encapsule to toastr to show a notification to user
   * @param message Message content to show in notification
   * @param title title of notification
   * @param config config to use in notification
   */
  customNotification(message: string, title: string, config: Partial<IndividualConfig>) {
      this._toast.info(message, title, config);
  }
}
