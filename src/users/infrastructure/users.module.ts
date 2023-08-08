import { HashProvider } from '@/shared/application/providers/hash-provider';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserInMemoryRepository } from './database/in-memory/repositories/user-in-memory.repository';
import { BcryptHashProvider } from './providers/hash-provider/bcrypt.provider';
import { SignupUseCase } from '../application/usecases/signup.usecase';
import { UserRepository } from '../domain/repositories/user.repository';
import { SigninUseCase } from '../application/usecases/signin.usecase';
import { GetUseCase } from '../application/usecases/getuser.usecase';
import { ListUsersUseCase } from '../application/usecases/listusers.usecase';
import { UpdateUserUseCase } from '../application/usecases/update-user.usecase';
import { UpdatePasswordUseCase } from '../application/usecases/update-password.usecase';
import { DeleteUserUseCase } from '../application/usecases/delete-user.usecase';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserInMemoryRepository,
    },
    {
      provide: 'HashProvider',
      useClass: BcryptHashProvider,
    },
    {
      provide: SignupUseCase.UseCase,
      useFactory: (
        userRepostiory: UserRepository.Repository,
        hashProvider: HashProvider,
      ) => {
        return new SignupUseCase.UseCase(userRepostiory, hashProvider);
      },
      inject: ['UserRepository', 'HashProvider'],
    },
    {
      provide: SigninUseCase.UseCase,
      useFactory: (
        userRepostiory: UserRepository.Repository,
        hashProvider: HashProvider,
      ) => {
        return new SigninUseCase.UseCase(userRepostiory, hashProvider);
      },
      inject: ['UserRepository', 'HashProvider'],
    },
    {
      provide: GetUseCase.UseCase,
      useFactory: (userRepostiory: UserRepository.Repository) => {
        return new GetUseCase.UseCase(userRepostiory);
      },
      inject: ['UserRepository'],
    },
    {
      provide: ListUsersUseCase.UseCase,
      useFactory: (userRepostiory: UserRepository.Repository) => {
        return new ListUsersUseCase.UseCase(userRepostiory);
      },
      inject: ['UserRepository'],
    },
    {
      provide: UpdateUserUseCase.UseCase,
      useFactory: (userRepostiory: UserRepository.Repository) => {
        return new UpdateUserUseCase.UseCase(userRepostiory);
      },
      inject: ['UserRepository'],
    },
    {
      provide: UpdatePasswordUseCase.UseCase,
      useFactory: (
        userRepostiory: UserRepository.Repository,
        hashProvider: HashProvider,
      ) => {
        return new UpdatePasswordUseCase.UseCase(userRepostiory, hashProvider);
      },
      inject: ['UserRepository', 'HashProvider'],
    },
    {
      provide: DeleteUserUseCase.UseCase,
      useFactory: (userRepostiory: UserRepository.Repository) => {
        return new DeleteUserUseCase.UseCase(userRepostiory);
      },
      inject: ['UserRepository'],
    },
  ],
})
export class UsersModule {}
