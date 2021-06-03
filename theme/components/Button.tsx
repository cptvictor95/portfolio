export const Button = {
  baseStyle: {
    fontFamily: 'Barlow',
    _focus: {
      outline: 'none',
    },
  },
  variants: {
    solid: {
      bg: 'green.500',
      _hover: {
        bg: 'red.300',
      },
      _focus: {
        bg: 'green.700',
      },
      _active: {
        bg: 'green.700',
      },
    },
    link: {
      color: 'white',
      textTransform: 'uppercase',
      borderRadius: '0',
      paddingX: 8,
      paddingY: 4,
      _hover: {
        color: 'red.300',
        textDecoration: 'none',
      },
      _focus: {
        color: 'red.700',
      },
      _active: {
        color: 'red.700',
      },
    },
    outline: {
      borderColor: 'black',
      bg: 'transparent',
      _hover: {
        bg: 'transparent',
        color: 'red.700',
        borderColor: 'red.700',
      },
      _focus: {
        bg: 'transparent',
        color: 'red.700',
        borderColor: 'red.700',
      },
      _active: {
        bg: 'transparent',
        color: 'red.700',
        borderColor: 'red.700',
      },
    },
    scrollToTop: {
      position: 'fixed',
      bottom: 8,
      right: 8,
      zIndex: '99',
      color: 'red.300',
      bg: 'transparent',
      fontSize: 'xl',
      fontWeight: 'bold',
      border: '1px solid',
      borderColor: 'red.300',
      _hover: {
        borderColor: 'red.700',
        color: 'red.700',
        bg: 'red.300',
      },
      _focus: {
        borderColor: 'red.700',
        color: 'red.700',
        bg: 'red.300',
      },
      _active: {
        borderColor: 'red.700',
        color: 'red.700',
        bg: 'red.300',
      },
    },
    socialIcon: {
      color: 'white',
      bg: 'transparent',
      fontSize: 'xl',
      fontWeight: 'bold',
      _hover: {
        color: 'red.300',
      },
      _focus: {
        color: 'red.700',
      },
      _active: {
        color: 'red.700',
      },
    },
  },
};
