import { Entity } from '../entities/entity';
import { RepositoryInterface } from './repository-contracts';

export interface SearchaleRepositoryInterface<
  E extends Entity,
  SearchInput,
  SearchOutput,
> extends RepositoryInterface<E> {
  search(props: SearchInput): Promise<SearchOutput>;
}
