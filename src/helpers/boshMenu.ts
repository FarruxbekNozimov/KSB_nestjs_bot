import { Context, Markup } from 'telegraf';

export async function boshMenu(ctx: Context, text: string) {
  try {
    await ctx.replyWithHTML(
      text,
      Markup.keyboard([
        ['☎️ Murojaat', '👩🏻‍💻 Operator'],
        ["♻️ Ta'riflar ( ITS )"],
        ["💳 To'lov kartasi"],
      ])
        .oneTime()
        .resize(),
    );
  } catch (error) {
    console.log(error);
  }
}
