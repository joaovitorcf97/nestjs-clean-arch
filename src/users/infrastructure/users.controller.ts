import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  HttpCode,
  Query,
  Put,
} from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignupUseCase } from '../application/usecases/signup.usecase';
import { SigninUseCase } from '../application/usecases/signin.usecase';
import { ListUsersUseCase } from '../application/usecases/listusers.usecase';
import { GetUseCase } from '../application/usecases/getuser.usecase';
import { UpdateUserUseCase } from '../application/usecases/update-user.usecase';
import { UpdatePasswordUseCase } from '../application/usecases/update-password.usecase';
import { DeleteUserUseCase } from '../application/usecases/delete-user.usecase';
import { SigninDto } from './dto/signin.dto';
import { ListUsersDto } from './dto/list-users.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Controller('users')
export class UsersController {
  @Inject(SignupUseCase.UseCase)
  private signupUseCase: SignupUseCase.UseCase;

  @Inject(SigninUseCase.UseCase)
  private signinUseCase: SigninUseCase.UseCase;

  @Inject(ListUsersUseCase.UseCase)
  private listUsersUseCase: ListUsersUseCase.UseCase;

  @Inject(GetUseCase.UseCase)
  private getUserUseCase: GetUseCase.UseCase;

  @Inject(UpdateUserUseCase.UseCase)
  private updateUserUseCase: UpdateUserUseCase.UseCase;

  @Inject(UpdatePasswordUseCase.UseCase)
  private updatePasswordUseCase: UpdatePasswordUseCase.UseCase;

  @Inject(DeleteUserUseCase.UseCase)
  private deleteUserUseCase: DeleteUserUseCase.UseCase;

  @Post()
  async create(@Body() signupDto: SignupDto) {
    return this.signupUseCase.execute(signupDto);
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() signinDto: SigninDto) {
    return this.signinUseCase.execute(signinDto);
  }

  @Get()
  async search(@Query() searchParams: ListUsersDto) {
    return this.listUsersUseCase.execute(searchParams);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.getUserUseCase.execute({ id });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUserUseCase.execute({ id, ...updateUserDto });
  }

  @Patch(':id')
  async updatePassword(
    @Param('id') id: string,
    @Body() updatePasswordUserDto: UpdatePasswordDto,
  ) {
    return this.updatePasswordUseCase.execute({ id, ...updatePasswordUserDto });
  }

  @HttpCode(204)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.deleteUserUseCase.execute({ id });
  }
}
