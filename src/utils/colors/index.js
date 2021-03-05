const mainColors = {
  green1: '#0bcad4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#495A75',
  gray1: '#7d8797',
  gray2: '#e9e9e9',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.gray1,
    menuInActive: mainColors.dark2,
    menuActive: mainColors.green1,
  },
  button: {
    primary: {
      bacground: mainColors.green1,
      text: 'white',
    },
    secondary: {
      bacground: 'white',
      text: mainColors.dark1,
    },
  },
  border: mainColors.gray2,
  cardLight: mainColors.green2,
};
