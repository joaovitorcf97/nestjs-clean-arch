import { Entity } from '../entities/entity';
import { SearchaleRepositoryInterface } from './searchable-repository-contracts';
import { InMemoryRepository } from './in-memory.repository';

export abstract class InMemorySearchableRepository<E extends Entity>
  extends InMemoryRepository<E>
  implements SearchaleRepositoryInterface<E, any, any>
{
  search(props: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
