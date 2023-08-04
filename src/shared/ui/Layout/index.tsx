import { FC, Fragment, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import styled from '@emotion/styled';
import { zIndex } from '@/app/configuration';
import { Container } from '@chakra-ui/react';
import { SideBar } from '@/widgets/SideBar';
import { Header } from '@/widgets/Header';

export const Layout: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const SMain = styled.main`
    display: flex;
    position: relative;
         z-index: ${zIndex.base};
  `;

  return (
    <Fragment>
      <SMain>
         <SideBar />
         <Container maxWidth={{ base: 'full' }} paddingX={'30px'}>
             <Header />
             <AnimatePresence mode={'wait'}>
                 <Outlet />
             </AnimatePresence>
         </Container>
      </SMain>
    </Fragment>
  );
};
