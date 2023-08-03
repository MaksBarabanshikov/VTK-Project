import { ReactComponent as CloudSvg } from '@/shared/assets/img/cloud.svg';
import { Box, BoxProps, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';

export const CloudLayout:FC<BoxProps> = ({ ...rest }) => {
  const { colorMode } = useColorMode();
  return (
      <Box color={colorMode === 'light' ? 'base.light' : 'base.dark'} position={'absolute'} top={0} {...rest}>
          <CloudSvg />
      </Box>
  );
};