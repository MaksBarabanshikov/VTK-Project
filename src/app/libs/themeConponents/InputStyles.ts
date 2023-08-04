import { StyleFunctionProps } from '@chakra-ui/react';

export const InputStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    outline: (props: StyleFunctionProps) => ({
      borderColor: props.colorMode === 'light' ?  'gray.100' : 'red.base',
    }),
    shadowed: (props: StyleFunctionProps) => ({
      field: {
        backgroundColor: props.colorMode === 'light' ? '#fff' : 'gray.700',
        boxShadow: props.colorMode === 'light' ? '0px 4px 4px 0px rgba(0, 0, 0, 0.04)' : '0px 4px 4px 0px rgba(255, 255, 255, 0.04)',
      },
      text: {
        color: props.colorMode === 'light' ? 'black' : 'white',
      },
    }),
    solid: (props: StyleFunctionProps) => ({
      field: {
        backgroundColor: props.colorMode === 'light' ? 'white' : 'gray.700',
      },
      text: {
        color: props.colorMode === 'light' ? 'black' : 'white',
      },
    }),
  },
  defaultProps: {},
};