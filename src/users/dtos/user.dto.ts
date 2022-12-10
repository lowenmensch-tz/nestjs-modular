import { IsString, IsNotEmpty, IsEmail, IsUrl,Length } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto{


  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  readonly password: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly firstname: string;

  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @IsString()
  @IsNotEmpty()
  readonly phonenumber: string;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}


export class UpdateUserDto extends PartialType(CreateUserDto){}
