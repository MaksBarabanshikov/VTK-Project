import { Box } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

export const FullscreenCenter: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box width={'full'} height={'90vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      {children}
    </Box>
  );
};
