import { Switch, useColorMode } from '@chakra-ui/react';

export const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();
    
  return (<Switch colorScheme={'red'} size={'lg'} onChange={toggleColorMode} />);
};

