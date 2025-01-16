import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { createPasswordHashed } from 'src/utils/password';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    // const user = await this.findUserByCpf(createUserDto.cpf).catch(
    // () => undefined,
    // );
    // if (user) {
    // TODO: already exists
    // }

    // const userEmail = await this.findUserByEmail(createUserDto.email).catch(
    // () => undefined,
    // );

    // if (userEmail) {
    // TODO: email already exists
    // }

    const passwordHashed = await createPasswordHashed(createUserDto.password);
    const newUser = await this.userRepository.save({
      ...createUserDto,
      password: passwordHashed,
    });

    return newUser;
  }

  async countPages(): Promise<number> {
    const count = await this.userRepository.count({});
    const pages = Math.ceil(count / 100);
    return pages;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
