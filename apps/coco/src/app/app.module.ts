import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './config/configuration.module';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [ConfigurationModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
