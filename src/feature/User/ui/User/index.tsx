import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Popover,
  PopoverArrow, PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
} from '@chakra-ui/react';

import testUser from '@/shared/assets/img/user.jpg';
import { FC } from 'react';
import { VTKArrowIcon } from '@/app/libs/icons.tsx';

interface IUserProps {
  user?: any
}
export const User:FC<IUserProps> = ({ user }) => {
  return (
      <Popover>
          <PopoverTrigger>
              <Flex
                  w={'full'}
                  h={'full'}
                  alignItems={'center'}
                  border={'1px solid #fff'}
                  px={'27px'}
                  borderRadius={'30px'}
                  justifyContent={'space-between'}
              >
                  { user && <p>user</p> }
                  <Box borderRadius={'50%'} overflow={'hidden'}>
                      <Image w={'full'} h={'full'} src={testUser}/>
                  </Box>
                  <Stack gap={'1px'}>
                      <Heading fontSize={'16'} fontWeight={700}>Bogatyrev.E.Pta</Heading>
                      <Text fontSize={'14'} color={'gray.400'}>Super Admin</Text>
                  </Stack>
                  <Icon color={'red.base'} as={VTKArrowIcon} />
              </Flex>
          </PopoverTrigger>
          <PopoverContent outline={'none'}>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Text</PopoverHeader>
              <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cumque deserunt earum eveniet facere fugiat hic incidunt ipsa laborum modi neque odit porro sit sunt, tempora veniam veritatis voluptatibus?</PopoverBody>
          </PopoverContent>
      </Popover>
  );
};