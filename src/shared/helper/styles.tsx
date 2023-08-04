import { useColorMode } from '@chakra-ui/react';

export const currentBoxShadow = (shadow: string, alpha: number | string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { colorMode } = useColorMode();

  const darkTheme = `${shadow} rgba(255,255,255,${alpha})`;
  const lightTheme = `${shadow} rgba(0,0,0,${alpha})`;

  return colorMode === 'light' ? lightTheme : darkTheme;
};