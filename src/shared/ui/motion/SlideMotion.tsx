import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

const slideVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 100,
  },
};

export const SlideMotion:FC<PropsWithChildren> = ({ children }) => {
  return (
        <motion.div variants={slideVariants} initial={'initial'} animate={'animate'} exit={'exit'}>
            { children }
        </motion.div>
  );
};