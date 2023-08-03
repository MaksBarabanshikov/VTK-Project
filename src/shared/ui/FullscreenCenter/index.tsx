import { Box } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

interface FullscreenCenterProps extends PropsWithChildren {
  is100Vh?: boolean
}
export const FullscreenCenter: FC<FullscreenCenterProps> = ({ children, is100Vh = false }) => {
  return (
    <Box width={'full'} height={is100Vh ? '90vh' : '200px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      {children}
    </Box>
  );
};
