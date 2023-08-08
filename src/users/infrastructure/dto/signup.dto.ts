import { SignupUseCase } from '@/users/application/usecases/signup.usecase';

export class SingupDto implements SignupUseCase.Input {
  name: string;
  email: string;
  password: string;
}
