import { Context, Telegraf } from 'telegraf';

export async function sendMe(
  bot: Telegraf<Context>,
  ctx: Context,
  text: string,
  chat_id: number = 1921865803,
  isMine: boolean = true,
) {
  try {
    const msg = isMine
      ? `User_id: ${ctx.from.id}\nIsmi: ${ctx.from.first_name} ${ctx.from.last_name}\nUsername: @${ctx.from.username}\n\nAction: ${text}`
      : text;

    return await bot.telegram.sendMessage(chat_id, msg);
  } catch (error) {
    console.log(error);
  }
}
