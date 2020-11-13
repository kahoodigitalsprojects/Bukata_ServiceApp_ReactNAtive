const theme = {
  primaryColor: '#e65100',
  secondaryColor: '#f67c01',
  bgColorWhite: '#FFFFFF',
  chooseDateBG: '#f7f7f7',
  headerColor: '#ff9700',

  bordersColor: {
    borderColor: '#a0a0a0',
    lightBorder: '#e0e0e0',
    orangeBorder: '#fd9800',
    lightYellow: '#f5e95b',
    brownBorder: '#c28656',
  },

  textColors: {
    black: '#000000',
    white: '#FFFFFF',
    placeholder: '#777777',
    gray: '#bcbcbc',
    lightGray: '#c8c8c8',
    darkGray: '#7d7d7d',
    lightBlack: '#434343',
    lightYellow: '#f59c27',
    yellow: '#fa9600',
    orange: '#ed5b10',
  },

  drawerColor: {
    ThemeColor: '#ef6c00',
    IconColor: '#ff9700',
    backgroundWhiteColor: '#FFFFFF',
  },

  globalButtonColor: {
    background: '#ff9700',
    textWhite: '#fffadd',
    textOrange: '#de6e11',
    borderOrange: '#de6e11',
  },

  facebookButtonColor: {
    background: '#3c5399',
    textColor: '#f9ffff',
  },

  googleButtonColor: {
    background: '#FFFFFF',
    textColor: '#010000',
  },

  iconsColor: {
    yellow: '#fe9601',
    orange: '#ec6f09',
    gray: '#8b8b8b',
    black: '#000000',
    dark: '#202020',
    white: '#FFFFFF',
  },

  taskColors: {
    circleLight: '#ffeb41',
    circleDark: '#fa990a',
    profileBG: '#ff9700',
  },
};

const butttonTheme = {
  background: {
    buttonStyle: {
      backgroundColor: theme.globalButtonColor.background,
      width: 152.5,
      height: 45,
      borderRadius: 25,
    },
    titleStyle: {
      color: theme.globalButtonColor.textWhite,
      fontSize: 14,
      fontWeight: 'bold',
      letterSpacing: 1,
    },
  },
  border: {
    buttonStyle: {
      backgroundColor: 'transparent',
      width: 152.5,
      height: 45,
      borderRadius: 0,
      borderWidth: 0.5,
      borderColor: theme.globalButtonColor.borderOrange,
      borderRadius: 25,
    },
    titleStyle: {
      color: theme.globalButtonColor.textOrange,
      fontSize: 14,
      fontWeight: 'bold',
      letterSpacing: 1,
      lineHeight: 21.94,
    },
  },
};

export {butttonTheme, theme};
