import { StyleFunctionProps } from '@chakra-ui/react';

export const ButtonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    shadowed: (props: StyleFunctionProps) => ({
      backgroundColor: props.colorMode === 'light' ? '#fff' : 'gray.700',
      boxShadow: props.colorMode === 'light' ? '0px 4px 4px 0px rgba(0, 0, 0, 0.04)' : null,
      color: props.colorMode === 'light' ? 'black' : 'white',
      _hover: {
        transform: 'scale(1.1)',
      },
    }),
  },
  defaultProps: {},
};