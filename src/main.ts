import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 3001;
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());

    app.use((req, res, next) => {
      const startTime = Date.now();
      res.on('finish', () => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        console.log(
          `${req.method} ${req.originalUrl} ${res.statusCode} ${responseTime}ms`,
        );
      });
      next();
    });

    await app.listen(PORT, () => {
      console.log('server ishga tushdi');
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
