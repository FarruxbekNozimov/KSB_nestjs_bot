import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3001;

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: ['*'],
    credentials: true,
  });

  await app.listen(PORT, () => {
    console.log('server ishga tushdi');
  });
}
bootstrap();
