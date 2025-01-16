import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateByAdminDto extends PartialType(CreateUserDto) {
  id: number;
  email: string;
  name: string;
}
