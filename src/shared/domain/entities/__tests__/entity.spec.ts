import { validate as uuidValidate } from 'uuid';
import { Entity } from '../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('UserEntity unit tests', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 10 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  });

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 10 };
    const id = 'e4bc507b-1e4a-449e-9f44-b038e2b647e4';
    const entity = new StubEntity(props, id);

    expect(entity._id).toBe(id);
    expect(uuidValidate(entity._id)).toBeTruthy();
  });

  it('Should convert a entity to a JSON', () => {
    const props = { prop1: 'value1', prop2: 10 };
    const id = 'e4bc507b-1e4a-449e-9f44-b038e2b647e4';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});
