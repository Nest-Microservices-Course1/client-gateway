import { IsString } from 'class-validator';
import { LoginUserDto } from '.';

export class RegisterUserDto extends LoginUserDto {
  @IsString()
  name: string;
}
