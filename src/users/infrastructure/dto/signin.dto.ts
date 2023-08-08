import { SigninUseCase } from '@/users/application/usecases/signin.usecase';

export class SininDto implements SigninUseCase.Input {
  email: string;
  password: string;
}
