import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getLove(): string {
    return '我爱陈小猫儿';
  }
}


