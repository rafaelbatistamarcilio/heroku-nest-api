import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>) {

  }

  root(): string {
    return 'Hello World!';
  }

  async savePhoto() {
    const photo = new Photo();
    photo.description = 'TESTE PHOTO';
    photo.captureDate = new Date();
    try {
      return await this.photoRepository.save(photo);
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }
}
