import { Switch, useColorMode } from '@chakra-ui/react';

export const ThemeToggle = () => {
  const { toggleColorMode, colorMode  } = useColorMode();

  return (<Switch colorScheme={'red'} size={'lg'} data-theme={'dark'} onChange={toggleColorMode} isChecked={colorMode === 'light'} />);
};

