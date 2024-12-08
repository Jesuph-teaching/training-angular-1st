import { ReverseTextPipe } from './reverse-text.pipe';

describe('ReversTextPipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseTextPipe();
    expect(pipe).toBeTruthy();
  });
});
