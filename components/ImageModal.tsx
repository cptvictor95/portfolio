import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Button,
  Image,
  useDisclosure,
  Center,
} from '@chakra-ui/react';
import React from 'react';

const ImageModal: React.FC<{
  imagePath: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}> = ({ imagePath, isOpen, onOpen, onClose }) => {
  return (
    <>
      <Image
        onOpen={onOpen}
        onClick={onOpen}
        src={imagePath}
        maxW={{ base: '100%', md: '40%', lg: '350px' }}
        cursor="pointer"
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgImage={imagePath} overflowX="visible">
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageModal;
