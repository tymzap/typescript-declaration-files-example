import isDarkColor, { HexColor } from 'is-dark-color';

const purple: HexColor = '#800080';
const yellow: HexColor = '#ffff00';
const white: HexColor = '#ffffff';

console.log(`is ${purple} dark?`, isDarkColor(purple));
console.log(`is ${yellow} dark?`, isDarkColor(yellow));
console.log(`is ${white} dark? (override)`, isDarkColor(white, {
  override: {
    [white]: true
  }
}))
