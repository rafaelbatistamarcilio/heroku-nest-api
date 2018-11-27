import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageGateway } from './message.gateway';
import { Photo } from './photo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb' as any,
      url: process.env.HEROKU_API_DB_URL,
      // host: process.env.HEROKU_API_DB_HOST,
      // port: process.env.HEROKU_API_DB_PORT,
      // username: process.env.HEROKU_API_DB_USER,
      // password: process.env.HEROKU_API_DB_PASS,
      // database: process.env.HEROKU_API_DB_NAME,
      // ssl: process.env.HEROKU_API_DB_SSL,
      // authSource: 'admin',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    TypeOrmModule.forFeature([Photo]),
  ],
  controllers: [AppController],
  providers: [AppService, MessageGateway],
})
export class AppModule {
  constructor() {
    Logger.log('INITIALIZING...');
    Logger.log('host ' + process.env.HEROKU_API_DB_HOST);
    Logger.log('user ' + process.env.HEROKU_API_DB_USER);
  }
}
