import type { UserEntity } from 'src/user/entities/user.entity';

export class authUserDTO {
  id: number;
  email: string;
  name: string;
  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.email = userEntity.email;
  }
}

export class authBeneficiaryDTO {
  id: number;
  email: string;
  name: string;
  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.email = userEntity.email;
    this.name = userEntity.name;
  }
}
