import { Clock } from './clock';

describe('Clock class', () => {
  describe('constructor', () => {
    test('constructor with empty options', () => {
      const clock = new Clock();
      expect(clock).toBeDefined();
      expect(clock.format).toBe('HH:mm:ss');
      expect(clock.container).toBe(document.body);
    });

    test('constructor with options format and container', () => {
      const clock = new Clock();
      // TODO...
    });
  });

  describe('start method', () => {
    let clock: Clock;

    beforeAll(() => {
      jest.useFakeTimers();
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    beforeEach(() => {
      clock = new Clock();
    });

    test('start method', () => {
      clock['update'] = jest.fn();
      clock.start();
      expect(clock['update']).toBeCalledTimes(1);
      jest.advanceTimersByTime(1000);
      expect(clock['update']).toBeCalledTimes(2);
    });
  });
});
