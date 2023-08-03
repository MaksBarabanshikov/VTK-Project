import { FC, PropsWithChildren, Suspense } from 'react';
import { FullscreenCenter } from '@/shared/ui';
import { Spinner } from '@chakra-ui/react';

export const SuspenseRouteWrapper:FC<PropsWithChildren> = ({ children }) => {
  return (
      <Suspense
          fallback={
              <FullscreenCenter>
                  <Spinner color={'red.base'} size={'xl'} />
              </FullscreenCenter>
          }
      >
          { children }
      </Suspense>
  );
};