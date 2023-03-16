import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AppService {
  constructor(private config: ConfigService) {
    console.log(this.config);
  }
  getData(): { message: string } {
    console.log(this.config);
    return { message: 'Welcome to coco!' };
  }
}
