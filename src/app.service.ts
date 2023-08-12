import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Markup, Telegraf } from 'telegraf';
import { MyBotName } from './app.constants';

@Injectable()
export class AppService {
  constructor(@InjectBot(MyBotName) private readonly bot: Telegraf<Context>) {}

  async onStart(ctx: Context) {
    await ctx.reply(
      `Salom, <b>${ctx.from.first_name} !</b>\n\n🤖 Men dastur bo'yicha murojaat qoldirishingiz uchun yordam beraman, murojaat qoldirish tugmasi orqali murojaat yo'llashingiz mumkin !`,
      {
        parse_mode: 'HTML',
        ...Markup.keyboard([
          ['☎️ Murojaat', '👩‍💻 Operator'],
          ["♻️ Ta'riflar (ITS)"],
          ["💳 To'lov kartasi"],
        ])
          .resize()
          .oneTime(),
      },
    );
  }
}
