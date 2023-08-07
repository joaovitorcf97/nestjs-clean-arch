import { UserEntity } from '../entities/user.entity';
import { SearchaleRepositoryInterface } from '@/shared/domain/repositories/searchable-repository-contracts';

export interface UserRepository
  extends SearchaleRepositoryInterface<UserEntity, any, any> {
  findByEmail(email: string): Promise<UserEntity>;
  emailExists(email: string): Promise<void>;
}
