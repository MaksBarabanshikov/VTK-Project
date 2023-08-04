import { Icon, Input, InputGroup, InputLeftElement, InputProps } from '@chakra-ui/react';
import { VTKSearchIcon } from '@/app/libs/icons.tsx';
import { FC } from 'react';

interface ISearchProps extends InputProps {}

export const Search:FC<ISearchProps> = ({ ...rest }) => {
  return (
        <InputGroup>
            <InputLeftElement
                pointerEvents={'none'}
                color={'red.base'}
            >
                <Icon mt={'5px'} as={VTKSearchIcon} />
            </InputLeftElement>
            <Input size={'lg'} placeholder={'Search here'} borderRadius={'30px'} {...rest} />
        </InputGroup>
  );
};