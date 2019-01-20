import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { Direction } from '../../../interfaces/direction';

@Component({
  selector: 'app-form-notification',
  templateUrl: './form-notification.component.html',
  styleUrls: ['./form-notification.component.scss']
})
export class FormNotificationComponent implements OnInit {
  form: FormGroup;
  directionArr: Direction[] = [
    {
      description: 'Top right',
      value: 'toast-top-right',
    },
    {
      description: 'Top left',
      value: 'toast-top-left',
    },
    {
      description: 'Bottom right',
      value: 'toast-bottom-right',
    },
    {
      description: 'Bottom left',
      value: 'toast-bottom-left',
    },
  ];
  constructor(private fb: FormBuilder,
            private _notification: NotificationService) { }

  ngOnInit() {
    this.createForm();
  }
  /**
   * Build an Angular Reactive Form
   */
  createForm() {
    this.form = this.fb.group(
      {
        direction: [null, []],
        title: [null, [Validators.required]],
        message: [null, [Validators.required]],
        timing: [null, []]
      }
    );
  }
  /**
   * Create a custom notification
   */
  createNotification() {
    this._notification.customNotification(
      this.form.get('message').value,
      this.form.get('title').value,
      {
        timeOut: this.form.get('timing').value || 5000,
        positionClass: this.form.get('direction').value || 'toast-top-right'
      }
    );
  }

}
