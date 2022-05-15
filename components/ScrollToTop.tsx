import { TriangleUpIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  const checkScrollTop = () => {
    if (typeof window !== 'undefined') {
      if (!showScroll && window.pageYOffset > 250) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 250) {
        setShowScroll(false);
      }
    }
  };

  const scrollTop = () => {
    return scroll.scrollToTop();
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', checkScrollTop);
  }

  return (
    <IconButton
      icon={<TriangleUpIcon />}
      aria-label="Botão Voltar para o Topo"
      title="Voltar para o Topo"
      variant="scrollToTop"
      display={showScroll ? 'flex' : 'none'}
      onClick={scrollTop}
    />
  );
};

export default ScrollToTop;
