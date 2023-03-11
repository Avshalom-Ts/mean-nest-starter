import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './configuration';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [config] })],
  exports: [ConfigModule],
})
export class ConfigurationModule {}