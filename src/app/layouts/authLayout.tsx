import {
  Box,
  Center, Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
  useToast,
} from '@chakra-ui/react';
import { CloudLayout, LineWrapper, Logo } from '@/shared/ui';
import { GoogleCredentialResponse, GoogleLogin } from '@react-oauth/google';
import { Outlet, Link } from 'react-router-dom';
import GirlImage from '@/shared/assets/img/girl.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';

import Moon from '@/shared/assets/img/moon.png';
import Stars from '@/shared/assets/img/stars.png';
import { zIndex } from '@/app/configuration';
import { ADMIN_LAYOUT } from '@/app/configuration/routerPaths.ts';
import { ThemeToggle } from '@/feature/ThemeToggle';

export const AuthLayout = () => {
  const toast = useToast();
  const { colorMode } = useColorMode();
  const handleGoogleOnSuccess = (response: GoogleCredentialResponse) => {
    console.log(response);
    toast({
      title: 'Google Auth Success',
      description: 'Successful login',
      status: 'success',
      isClosable: true,
      duration: 9000,
    });
  };
  const handleGoogleOnError = () => {
    return toast({
      title: 'Google Auth Failed',
      description: 'Unknown Error',
      status: 'error',
      isClosable: true,
      duration: 9000,
    });
  };

  const AbsoluteContainer = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    z-index: ${zIndex.optional};
  `;

  return (
      <Container maxWidth={{ base: '1400px' }} marginY={10}>
          <Box as={'section'} position={'relative'} backgroundColor={colorMode === 'light' ? 'base.light' : 'base.dark'} borderRadius={'60px'} overflow={'hidden'} boxShadow={colorMode === 'light' ? '2px 10px 20px 10px rgba(0,0,0,0.2)' : '2px 10px 20px 10px rgba(255,255,255,0.2)'}>
              <AnimatePresence mode={'wait'}>
                  { colorMode === 'dark' && <AbsoluteContainer>
                      <motion.img src={Moon} initial={{ y: -300, x: -300, opacity: 0 }} animate={{ y: -50, x: -50, opacity: 1 }} exit={{ y: -300, x: -300, opacity: 0 }} />
                      <motion.img src={Stars} initial={{ y: -300, opacity: 0 }} animate={{ y: -50, opacity: 1 }} exit={{ y: -300, opacity: 0 }} />
                  </AbsoluteContainer> }
              </AnimatePresence>
              <Flex position={'relative'} zIndex={zIndex.plus}>
                  <Stack width={'50vw'} padding={10} position={'relative'}>
                      <CloudLayout right={-10} />
                      <Flex justifyContent={'space-between'}>
                          <Logo />
                          <ThemeToggle />
                      </Flex>
                      <Stack width={'420px'} margin={'auto'}>
                          <Heading textAlign={'center'}>Welcome <Text display={'inline'} color={'red.base'}>Player</Text></Heading>
                          <Text textAlign={'center'}>Welcome to VTKProject. Munchkin card game</Text>
                          <Center>
                              <GoogleLogin width={'100%'} size={'large'} onSuccess={handleGoogleOnSuccess} onError={handleGoogleOnError} />
                          </Center>
                          <Center>
                              <LineWrapper>Or</LineWrapper>
                          </Center>
                          <Link to={ADMIN_LAYOUT}>ADMIN</Link>
                          <AnimatePresence mode={'wait'} presenceAffectsLayout={true}>
                              <Outlet />
                          </AnimatePresence>
                      </Stack>
                  </Stack>
                  <Box maxWidth={'100vw'} maxHeight={'100vh'}>
                      <Image src={GirlImage} width={'full'} />
                  </Box>
              </Flex>
          </Box>
      </Container>
  );
};