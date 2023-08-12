import { Ctx, On, Hears, Start, Update, Action } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { AppService } from './app.service';

@Update()
export class AppUpdate {
  constructor(private readonly appService: AppService) {}

  @Action('pay')
  async confirm(@Ctx() ctx: Context) {
    return this.appService.pay(ctx);
  }

  @Start()
  async onStart(@Ctx() ctx: Context) {
    return this.appService.onStart(ctx);
  }

  @Hears('☎️ Murojaat')
  async Call(@Ctx() ctx: Context) {
    return this.appService.call(ctx);
  }

  @Hears('👩🏻‍💻 Operator')
  async Operator(@Ctx() ctx: Context) {
    return this.appService.operator(ctx);
  }

  @Hears("♻️ Ta'riflar ( ITS )")
  async Tariff(@Ctx() ctx: Context) {
    return this.appService.tariff(ctx);
  }

  @Hears("💳 To'lov kartasi")
  async Pay(@Ctx() ctx: Context) {
    return this.appService.pay(ctx);
  }

  @Hears('⬅️ Orqaga')
  async Back(@Ctx() ctx: Context) {
    return this.appService.back(ctx);
  }

  @On('contact')
  async onContact(@Ctx() ctx: Context) {
    return this.appService.onContact(ctx);
  }
}
