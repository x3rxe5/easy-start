import { Greeter } from '../index';

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
  expect(Greeter('Jason')).toBe('Hello Jason');
  expect(Greeter('Pulkit')).toBe('Hello Pulkit');
});