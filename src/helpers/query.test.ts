import { pathAddQuery } from './query';

describe('pathAddQuery', () => {
  it('should return the formatted path with query parameters', () => {
    const path = '/api/v1/users';
    const query = {
      page: 1,
      limit: 10,
      search: 'John Doe',
      shouldBeRemoved: undefined,
    };

    const formattedPath = pathAddQuery(path, query);

    expect(formattedPath).toBe('/api/v1/users?page=1&limit=10&search=John Doe');
  });

  it('should return the formatted path without query parameters if query is empty', () => {
    const path = '/api/v1/users';
    const query = {};

    const formattedPath = pathAddQuery(path, query);

    expect(formattedPath).toBe('/api/v1/users');
  });
});
