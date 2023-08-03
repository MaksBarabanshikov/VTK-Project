import { FC, PropsWithChildren } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface LineWrapperProp extends PropsWithChildren {

}
export const LineWrapper: FC<LineWrapperProp> = ({ children }) => {
  return (
        <Flex alignItems={'center'} gap={'16px'}>
            <Box width={'60px'} height={'3px'} backgroundColor={'#AFA8A8'} />
            <Text m={0}>{ children }</Text>
            <Box width={'60px'} height={'3px'} backgroundColor={'#AFA8A8'} />
        </Flex>
  );
};