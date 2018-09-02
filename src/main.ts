import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port: any = process.env.PORT || 8080;
	app.setGlobalPrefix('api');
	app.use(cors());
  await app.listen(port);
}
bootstrap();
