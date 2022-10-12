export const Button = {
  baseStyle: {
    fontFamily: 'Barlow',
    textTransform: 'uppercase',
    _focus: {
      outline: 'none',
    },
  },
  variants: {
    solid: {
      color: 'black',
      bg: 'light-green',
      _hover: {
        bg: 'dark-green',
      },
      _focus: {
        bg: 'green-camo',
      },
      _active: {
        bg: 'green-camo',
      },
    },
    link: {
      color: 'white',
      textTransform: 'uppercase',
      borderRadius: '0',
      paddingX: 8,
      paddingY: 4,
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
    outline: {
      borderColor: 'black',
      color: 'black',
      bg: 'transparent',
      _hover: {
        bg: 'transparent',
        color: 'black',
        borderColor: 'green-camo',
        boxShadow: 'md',
      },
      _focus: {
        bg: 'transparent',
        color: 'black',
        borderColor: 'green-camo',
        boxShadow: 'md',
      },
      _active: {
        bg: 'transparent',
        color: 'black',
        borderColor: 'green-camo',
        boxShadow: 'md',
      },
    },
    scrollToTop: {
      position: 'fixed',
      bottom: 8,
      right: 8,
      zIndex: '99',
      color: 'green-camo',
      bg: 'light-green',
      fontSize: 'xl',
      fontWeight: 'bold',
      border: '1px solid',
      borderColor: 'green-camo',
      boxShadow: 'lg',
      _hover: {
        borderColor: 'dark-green',
        color: 'green-camo',
        bg: 'green.200',
        boxShadow: 'md',
      },
      _focus: {
        borderColor: 'dark-green',
        color: 'dark-green',
        bg: 'green.200',
        boxShadow: 'md',
      },
      _active: {
        borderColor: 'dark-green',
        color: 'dark-green',
        bg: 'green.200',
        boxShadow: 'md',
      },
    },
    socialIcon: {
      color: 'white',
      bg: 'transparent',
      fontSize: 'xl',
      fontWeight: 'bold',
      _hover: {
        color: 'light-green',
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
