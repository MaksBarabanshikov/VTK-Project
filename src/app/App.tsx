import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import appTheme from '@/app/libs/theme.ts';
import appRouter from '@/app/appRouter.tsx';

function App() {
  return (
    <ChakraProvider theme={appTheme} cssVarsRoot="body">
      <ColorModeScript initialColorMode="light" />
      <RouterProvider router={appRouter} />
    </ChakraProvider>
  );
}

export default App;
