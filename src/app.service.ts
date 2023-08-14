import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Markup, Telegraf } from 'telegraf';
import { MyBotName } from './app.constants';
import { boshMenu } from './helpers/boshMenu';
import { payMsg } from './helpers/pay';
import { sendMe } from './helpers/sendMe';

@Injectable()
export class AppService {
  constructor(@InjectBot(MyBotName) private readonly bot: Telegraf<Context>) {}

  async onStart(ctx: Context) {
    try {
      sendMe(this.bot, ctx, 'Bosh menuda');
      return await boshMenu(
        ctx,
        `Salom, <b>${ctx.from.first_name} !</b>\n\n🤖 Men dastur bo'yicha murojaat qoldirishingiz uchun yordam beraman, murojaat qoldirish tugmasi orqali murojaat yo'llashingiz mumkin !`,
      );
    } catch (error) {}
  }

  async onCancel(ctx: Context) {
    try {
      sendMe(this.bot, ctx, 'Cancel');
      return await boshMenu(
        ctx,
        `🚫 Joriy operatsiya bekor qilindi, qaytadan boshlashiz mumkin!`,
      );
    } catch (error) {}
  }

  async call(ctx: Context) {
    try {
      sendMe(this.bot, ctx, 'Contact');
      await ctx.replyWithHTML(
        `📞 Menga kontaktingizni yuboring\n\n↘️ ↘️ ↘️ ↘️`,
        Markup.keyboard([
          [Markup.button.contactRequest('📞 Kontaktni yuborish')],
          ['⬅️ Orqaga'],
        ])
          .oneTime()
          .resize(),
      );
      return;
    } catch (error) {}
  }

  async operator(ctx: Context) {
    try {
      sendMe(this.bot, ctx, 'Operator');
      await boshMenu(
        ctx,
        `Assalomu alaykum! 🖐 Men sizga dastur bo'yicha murojaat qoldirishingizga yordam beraman\n\n👉 Operator bilan bog'lanish https://t.me/ksbsoft_operator\n▬▬▬▬▬▬▬▬▬▬▬▬\nMurojaat uchun:\n☎️ Telefon: +998782980999`,
      );
      return;
    } catch (error) {}
  }

  async tariff(ctx: Context) {
    try {
      sendMe(this.bot, ctx, 'Tariff');
      await ctx.replyWithHTML(
        `🔰 Quyidagi ITS ta'riflarimizdan biriga ulaning!\n\n♻️ STANDART 1 OY - 120.000 so'm\n♻️ KOMFORT 3 OY - 300.000 so'm\n♻️ OPTIMAL 6 OY - 500.000 so'm\n♻️ ELEGANT 12 OY - 900.000 so'm\n\nMaqsadimiz tez va sifatli xizmat ko'rsatish!`,
        Markup.inlineKeyboard([
          [Markup.button.callback("💳 To'lov kartasi", `pay`)],
        ]),
      );
      return;
    } catch (error) {}
  }

  async pay(ctx: Context) {
    try {
      sendMe(this.bot, ctx, 'Payment');
      return await boshMenu(ctx, payMsg);
    } catch (error) {}
  }

  async back(ctx: Context) {
    try {
      sendMe(this.bot, ctx, 'Back to');
      return await boshMenu(ctx, `🗨 Asosiy menyu`);
    } catch (error) {}
  }

  async onContact(ctx: Context) {
    try {
      if ('contact' in ctx.message) {
        sendMe(this.bot, ctx, ctx.message.contact.phone_number);
        await ctx.replyWithHTML(
          `😔 Hech qanday ma'lumot topilmadi! Iltimos qaytadan urunib ko'ring yoki operatorga murojaat qiling!\nhttps://t.me/ksbsoft_operator`,
          Markup.keyboard([
            [Markup.button.contactRequest('📞 Kontaktni yuborish')],
            ['⬅️ Orqaga'],
          ])
            .oneTime()
            .resize(),
        );
        return;
      }
    } catch (error) {}
  }

  async onMessage(ctx: Context) {
    try {
      if ('text' in ctx.message) {
        if (ctx.from.id == 1921865803) {
          sendMe(this.bot, ctx, ctx.message.text, 1629956090, false);
        } else {
          sendMe(this.bot, ctx, ctx.message.text);
        }
        return;
      }
    } catch (error) {}
  }
}
