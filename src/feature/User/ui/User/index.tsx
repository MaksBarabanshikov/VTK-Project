import { Box, Flex, Image } from '@chakra-ui/react';

import testUser from '@/shared/assets/img/user.jpg';
export const User = () => {
  return (
      <Flex alignItems={'center'} border={'gray.200'}>
          <Box w={'60px'} h={'60px'} borderRadius={'50%'} overflow={'hidden'}>
              <Image w={'full'} h={'full'} src={testUser}/>
          </Box>
      </Flex>
  );
};