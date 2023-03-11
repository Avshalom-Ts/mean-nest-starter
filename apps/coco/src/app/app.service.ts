import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}
  getData(): { message: string } {
    console.log(this.config.get('MONGODB_URI'));
    return { message: 'Welcome to coco!' };
  }
}
