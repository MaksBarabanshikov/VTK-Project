import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ErrorMessageProps {
  errorMessage: any;
}
export const ErrorMessage:FC<ErrorMessageProps> = ({ errorMessage }) => {
  return (
      <AnimatePresence>
          {
              errorMessage &&
               <Text as={motion.span} initial={{ opacity: 0 }} animate={{  opacity: 1 }} exit={{ opacity: 0 }} color={'red.base'} m={0}>
                      { errorMessage.message } ఠ ͟ಠ
               </Text>
          }
      </AnimatePresence>
  );
};