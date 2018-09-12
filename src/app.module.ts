import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageGateway } from './message.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb' as any,
      host: process.env.HEROKU_API_DB_HOST,
      port: process.env.HEROKU_API_DB_PORT,
      username: process.env.HEROKU_API_DB_USER,
      password: process.env.HEROKU_API_DB_PASS,
      database: process.env.HEROKU_API_DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: true,
      authSource: 'admin',
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
