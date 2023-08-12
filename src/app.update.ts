import { Ctx, Hears, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { AppService } from './app.service';

@Update()
export class AppUpdate {
  constructor(private readonly appService: AppService) {}

  @Start()
  async onStart(@Ctx() ctx: Context) {
    return this.appService.onStart(ctx);
  }

  @Hears('☎️ Murojaat')
  async Call(@Ctx() ctx: Context) {
    return this.appService.onStart(ctx);
  }
}
