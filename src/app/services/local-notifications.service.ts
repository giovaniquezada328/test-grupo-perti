import { Injectable } from '@angular/core';
import { random } from 'lodash';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root'
})
export class LocalNotificationsService {

  constructor() { }

  showLocalNotification(title: string, body: string, at: Date, id: number = random(0, 1000)): void {
    LocalNotifications.schedule({
      notifications: [
        {
          title,
          body,
          id,
        },
      ],
    });
  }
}
