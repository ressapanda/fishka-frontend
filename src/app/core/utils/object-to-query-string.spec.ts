import toQueryString from './object-to-query-string';

describe('objectToQueryString', () => {
  it('should parse object to queryParams', () => {
    const queryParams = {
      test1: 'abc',
      test2: 'def',
      test3: 'ghi',
    };

    expect(toQueryString(queryParams)).toBe('test1=abc&test2=def&test3=ghi');
  });
});
