import { HashPasswdMiddleware } from './hash-passwd.middleware';

describe('HashPasswdMiddleware', () => {
  it('should be defined', () => {
    expect(new HashPasswdMiddleware()).toBeDefined();
  });
});
