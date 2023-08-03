import { FC, Fragment, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import styled from '@emotion/styled';
import { zIndex } from '@/app/configuration';
import { Container } from '@chakra-ui/react';

export const Layout: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const SMain = styled.main`
    margin-top: 10px;
    position: relative;
         z-index: ${zIndex.base};
  `;

  return (
    <Fragment>
      <SMain>
         <Container maxWidth={{ base: '1400px' }}>
             <AnimatePresence mode={'wait'}>
                 <Outlet />
             </AnimatePresence>
         </Container>
      </SMain>
    </Fragment>
  );
};
