import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const PORT = process.env.APP_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT);
}

bootstrap().then(() => {
  const logger: Logger = new Logger('MainApplication');
  logger.debug(`Server started on port ${PORT}`);
});
