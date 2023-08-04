import styled from '@emotion/styled';
import { FC, PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';

export const Sticky:FC<PropsWithChildren> = ({ children }) => {
  const SSticky = styled(Box)`
    position: sticky;
    top: 0;
    height: 100vh;
    
    transition: all 0.15s ease-in-out;
    `;

  return (
        <SSticky>
            { children }
        </SSticky>
  );
};