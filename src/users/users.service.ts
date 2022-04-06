import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/Users';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}
  getUsers() {}

  async postUsers(email: string, nickname: string, password: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!email) {
      throw new BadRequestException('이메일이 존재하지 않습니다');
    }
    if (!nickname) {
      throw new BadRequestException('닉네임이 존재하지 않습니다');
    }
    if (!password) {
      throw new BadRequestException('패스워드가 존재하지 않습니다');
    }
    if (user) {
      throw new UnauthorizedException('이미 존재하는 사용자입니다.');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.usersRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });
  }
}
