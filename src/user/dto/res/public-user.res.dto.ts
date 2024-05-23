import { PickType } from '@nestjs/swagger'; //PickType є функцією, що використовується для створення нового класу, який наслідує визначені властивості з існуючого класу.

import { BaseUserResDto } from './base-user.res.dto';

export class PublicUserResDto extends PickType(BaseUserResDto, [
  'id',
  'name',
  'age',
  'avatar',
]) {}
