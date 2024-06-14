import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  async notifyEmail(email: string, text: string) {
    console.log(email, text);
  }
}
