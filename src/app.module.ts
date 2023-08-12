import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { MyBotName } from './app.constants';
import { AppService } from './app.service';
import { AppUpdate } from './app.update';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: MyBotName,
      useFactory: () => ({
        token: process.env.BOT_TOKEN,
        middlewares: [],
        include: [],
      }),
    }),
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
  ],

  providers: [AppService, AppUpdate],
})
export class AppModule {}
