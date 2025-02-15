import { SetMetadata } from '@nestjs/common';
// import { UserType } from '../user/enum/enum-type.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles) => SetMetadata(ROLES_KEY, roles);
