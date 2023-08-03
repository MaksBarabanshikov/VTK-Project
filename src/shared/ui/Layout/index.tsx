import { FC, Fragment, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import styled from '@emotion/styled';
import { zIndex } from '@/app/configuration';
import { Box, Container } from '@chakra-ui/react';
import { SideBar } from '@/widgets/SideBar';
import { ThemeToggle } from '@/feature/ThemeToggle';

export const Layout: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const SMain = styled.main`
    display: flex;
    margin-top: 10px;
    position: relative;
         z-index: ${zIndex.base};
  `;

  return (
    <Fragment>
      <SMain>
         <SideBar />
         <Container maxWidth={{ base: 'full' }}>
             <Box width={'full'} height={'120px'} borderWidth={1}>
                 <ThemeToggle />
             </Box>
             <AnimatePresence mode={'wait'}>
                 <Outlet />
             </AnimatePresence>
         </Container>
      </SMain>
    </Fragment>
  );
};
