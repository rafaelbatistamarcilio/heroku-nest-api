import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Photo } from 'photo.entity';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('photo')
  async savePhoto() {
    return await this.appService.savePhoto();
  }

  @Get('photo/all')
  async findAll(): Promise<Photo[]> {
    return await this.appService.findAll();
  }

  @Get()
  root(): string {
    return this.appService.root();
  }
}
