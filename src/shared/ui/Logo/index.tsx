import { ReactComponent as LogoSvg } from '@/shared/assets/img/logo.svg';
import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const Logo:FC<BoxProps> = ({ ...rest }) => {
  return (
      <Box {...rest}>
        <LogoSvg />
      </Box>
  );
};