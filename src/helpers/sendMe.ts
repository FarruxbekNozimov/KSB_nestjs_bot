import { Context, Telegraf } from 'telegraf';

export async function sendMe(
  bot: Telegraf<Context>,
  ctx: Context,
  text: string,
) {
  try {
    await bot.telegram.sendMessage(
      1921865803,
      `User_id: ${ctx.from.id}\nIsmi: ${ctx.from.first_name} ${ctx.from.last_name}\nUsername: @${ctx.from.username}\n\nAction: ${text}`,
    );
  } catch (error) {
    console.log(error);
  }
}
