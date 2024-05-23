import { ApiProperty } from '@nestjs/swagger';

//@ApiProperty - це декоратор, який використовується в рамках NestJS у поєднанні з бібліотекою Swagger для документування API. Цей декоратор додає метадані до властивостей класів, які використовуються як DTO (Data Transfer Objects), для автоматичного генерування документації API.

export class BaseUserResDto {
  @ApiProperty({
    example: '121324354678976543fdg',
    description: 'The id of the User',
  })
  id: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the User',
  })
  public readonly name: string;

  @ApiProperty({
    example: 'test@.gmail.com',
    description: 'The email of the User',
  })
  public readonly email: string;

  @ApiProperty({
    example: 'https://www.example.com/avatar.jpg',
    description: 'The avatar of the User',
  })
  public readonly avatar?: string;

  @ApiProperty({
    example: 20,
    description: 'The age of the User',
  })
  public readonly age?: number;
}
