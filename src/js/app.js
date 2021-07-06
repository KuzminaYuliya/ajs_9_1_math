
/* eslint-disable no-underscore-dangle */
export default class MathChar {
  constructor(name, type, health = 100, level = 1) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.stoned = false;
    if (type === 'Daemon') {
      this.attack = 100;
      this.defence = 40;
    }
    if (type === 'Magician') {
      this.attack = 100;
      this.defence = 60;
    }
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    if (this.distance < 0) {
      return 0;
    }
    let attack = (this._attack - (this.distance - 1) * 10);
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return Math.round(attack);
  }

  set attack(value) {
    this._attack = value;
  }
}
