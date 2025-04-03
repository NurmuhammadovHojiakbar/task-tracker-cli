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
  constructor() {}
  black(text) {
    console.log(`\x1b[${colors.black}m ${text} \x1b[0m`);
  }
  red(text) {
    console.log(`\x1b[${colors.red}m ${text} \x1b[0m`);
  }
  green(text) {
    console.log(`\x1b[${colors.green}m ${text} \x1b[0m`);
  }
  yellow(text) {
    console.log(`\x1b[${colors.yellow}m ${text} \x1b[0m`);
  }
  blue(text) {
    console.log(`\x1b[${colors.blue}m ${text} \x1b[0m`);
  }
  magenta(text) {
    console.log(`\x1b[${colors.magenta}m ${text} \x1b[0m`);
  }
  cyan(text) {
    console.log(`\x1b[${colors.cyan}m ${text} \x1b[0m`);
  }
  white(text) {
    console.log(`\x1b[${colors.white}m ${text} \x1b[0m`);
  }
}

module.exports = {
  log: new Color(),
  colors,
};
