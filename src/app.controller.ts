import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('photo')
  async savePhoto() {
    return await this.appService.savePhoto();
  }

  @Get()
  root(): string {
    return this.appService.root();
  }
}
