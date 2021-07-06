/* import MathChar from '../app'; */

import Daemon from '../daemon';
import Magician from '../magician';

test('should test attack with stoned by Magician', () => {
  const magicianPlayer = new Magician('Magician');
  magicianPlayer.distance = 2;
  magicianPlayer.attack = 100;
  magicianPlayer.stoned = true;
  expect(magicianPlayer.attack).toBe(85);
});

test('should test attack with stoned by Daemon', () => {
  const daemonPlayer = new Daemon('Daemon');
  daemonPlayer.distance = 2;
  daemonPlayer.attack = 100;
  daemonPlayer.stoned = true;
  expect(daemonPlayer.attack).toBe(85);
});

test('should test attack without stoned by Magician', () => {
  const magicianPlayer = new Magician('Magician');
  magicianPlayer.distance = 2;
  magicianPlayer.attack = 100;
  magicianPlayer.stoned = false;
  expect(magicianPlayer.attack).toBe(90);
});

test('should test attack without stoned by Daemon', () => {
  const daemonPlayer = new Daemon('Daemon');
  daemonPlayer.distance = 2;
  daemonPlayer.attack = 100;
  daemonPlayer.stoned = false;
  expect(daemonPlayer.attack).toBe(90);
});

test('should test attack < 0 by Daemon', () => {
  const daemonPlayer = new Daemon('Daemon');
  daemonPlayer.distance = -2;
  daemonPlayer.attack = 100;
  daemonPlayer.stoned = false;
  expect(daemonPlayer.attack).toBe(0);
});
