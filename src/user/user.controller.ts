import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { RegisterUserDto } from '../types/user.dto'
@Controller('user')
@ApiTags('用户操作')
export class UserController {
  userService: any;

  @Post('register')
  @ApiOperation({ summary: '注册新用户' })
  register(@Body() user: RegisterUserDto): boolean {
    return this.userService.register(user);
  }

}
