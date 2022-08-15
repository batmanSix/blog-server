import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  // 给参数添加描述
  @ApiProperty({ description: '用户名' })
  userName: string;
  @ApiProperty({ description: '密码' })
  pwd: string;
  @ApiProperty({ description: '确认密码' })
  confirmPwd: string;
}
