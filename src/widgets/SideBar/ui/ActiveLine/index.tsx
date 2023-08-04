import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const ActiveLine = () => {
  const SLine = styled(motion.div)`
    width: 3px;
    height: 100%;
    right: 0;
    top: 0;
    background: red;
    position: absolute;
    border-radius: 10px;
    `;


  return (
      <SLine layoutId={'line'}/>
  );
};