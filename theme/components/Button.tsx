export const Button = {
  variants: {
    link: {
      position: 'static',
      color: 'purple.50',
      textTransform: 'uppercase',
      borderRadius: '0',
      paddingX: 8,
      paddingY: 4,
      _hover: {
        color: 'green.200',
        textDecoration: 'none',
      },
    },
    outline: {
      borderColor: 'purple.900',
      bg: 'transparent',
      _hover: {
        bg: 'green.500',
        borderColor: 'purple.900',
      },
    },
    scrollToTop: {
      position: 'fixed',
      bottom: 8,
      right: 8,
      zIndex: '99',
      color: 'black',
      bg: 'green.400',
      fontSize: 'xl',
      fontWeight: 'bold',
      border: '1px solid',
      borderColor: 'black',
      _hover: {
        bg: 'green.500',
      },
    },
  },
};
