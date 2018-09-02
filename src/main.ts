import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port: any = process.env.PORT || 3000;
  app.setGlobalPrefix('api');
  app.use(cors());
  await app.listen(port, () => {
    console.log(`Our app is running on port ${port}`);
  });
}
bootstrap();
