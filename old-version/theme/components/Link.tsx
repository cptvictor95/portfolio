export const Link = {
  baseStyle: {
    fontFamily: 'Barlow',
    _focus: {
      outline: 'none',
    },
  },
  variants: {
    nostyle: {
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: 'white',
      borderRadius: '0',
      _hover: {
        color: 'light-green',
        textDecoration: 'none',
      },
      _focus: {
        color: 'dark-green',
      },
      _active: {
        color: 'dark-green',
      },
    },
  },
};
