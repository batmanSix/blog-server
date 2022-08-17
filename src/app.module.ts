import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from "./config/db" // 数据库配置
import { User } from './entities/user'

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Kang@841331654',
      database: 'nestapi',
      entities: [User],
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
