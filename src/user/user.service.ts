import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { createPasswordHashed } from 'src/utils/password';
import { ConfigService } from '@nestjs/config'; // Add ConfigService for configuration
import { Logger } from '@nestjs/common'; // Add Logger

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name); // Initialize Logger

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private configService: ConfigService, // Inject ConfigService
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { cpf: createUserDto.cpf } });
    if (user) {
      throw new Error('User with this CPF already exists');
    }

    const userEmail = await this.userRepository.findOne({ where: { email: createUserDto.email } });
    if (userEmail) {
      throw new Error('User with this email already exists');
    }

    const passwordHashed = await createPasswordHashed(createUserDto.password);
    const newUser = await this.userRepository.save({
      ...createUserDto,
      password: passwordHashed,
    });

    return newUser;
  }

  async countPages(): Promise<number> {
    const count = await this.userRepository.count({});
    const paginationLimit = this.configService.get<number>('PAGINATION_LIMIT', 100); // Use ConfigService
    const pages = Math.ceil(count / paginationLimit);
    return pages;
  }

  async findOne(id: number): Promise<UserEntity | undefined> {
    const user = await this.userRepository.findOne({ where: { id } });
    this.logger.log(`User found with id ${id}: ${user}`); // Use Logger
    return user;
  }

  async remove(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new Error(`User with id ${id} not found`);
    }
    this.logger.log(`User with id ${id} removed`); // Log the removal
  }
}
