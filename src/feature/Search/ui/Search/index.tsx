import { Icon, Input, InputGroup, InputLeftElement, InputProps } from '@chakra-ui/react';
import { VTKSearchIcon } from '@/app/libs/icons.tsx';
import { FC } from 'react';

interface ISearchProps extends InputProps {
  variant?: string;
}

export const Search:FC<ISearchProps> = ({ variant = 'solid', ...rest }) => {
  return (
        <InputGroup h={'full'}>
            <InputLeftElement
                h={'full'}
                pointerEvents={'none'}
                color={'red.base'}
            >
                <Icon ml={'5px'} as={VTKSearchIcon} />
            </InputLeftElement>
            <Input size={'lg'} h={'full'} placeholder={'Search here'} borderRadius={'30px'} variant={variant} colorScheme={'red'} {...rest} />
        </InputGroup>
  );
};