import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule as NestConfig } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    NestConfig.forRoot({
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
