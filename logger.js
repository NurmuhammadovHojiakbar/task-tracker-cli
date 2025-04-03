const colors = Object.freeze({
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
});

class Color {
  constructor() {
    Object.keys(colors).forEach((color) => {
      this[color] = (text) => this.logColor(colors[color], text);
    });
  }
  logColor(code, text) {
    console.log(`\x1b[${code}m ${text} \x1b[0m`);
  }
}

module.exports = {
  log: new Color(),
  colors,
};
