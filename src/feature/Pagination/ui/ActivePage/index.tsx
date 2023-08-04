import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ActivePage = () => {
  const Active = styled(motion.div)`
      position: absolute;
      
      width: 51px;
      height: 51px;
      border-radius: 14px;
      background: #FF3030;
      box-shadow: 0 7px 16px 0 rgba(0, 0, 0, 0.14);
      z-index: -1;
`;

  return (<Active layoutId={'activePage'}/>);
};