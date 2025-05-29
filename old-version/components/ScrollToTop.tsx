import { TriangleUpIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const itemVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
  },
};

const ScrollToTop: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const checkScrollTop = () => {
    if (typeof window !== 'undefined') {
      if (!show && window.pageYOffset > 250) {
        setShow(true);
      } else if (show && window.pageYOffset <= 250) {
        setShow(false);
      }
    }
  };

  const scrollTop = () => {
    return scroll.scrollToTop({});
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', checkScrollTop);
  }

  return (
    <AnimatePresence>
      <IconButton
        as={motion.a}
        href="#"
        initial="closed"
        animate="open"
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        icon={<TriangleUpIcon />}
        aria-label="Botão Voltar para o Topo"
        title="Voltar para o Topo"
        variant="scrollToTop"
        display={show ? 'grid' : 'none'}
        placeItems="center"
        variants={itemVariants}
        onClick={scrollTop}
      />
    </AnimatePresence>
  );
};

export default ScrollToTop;
