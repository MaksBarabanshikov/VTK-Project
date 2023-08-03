import { FC, PropsWithChildren, Suspense } from 'react';
import { FullscreenCenter } from '@/shared/ui';
import { Spinner } from '@chakra-ui/react';

interface SuspenseRouteWrapperProps extends PropsWithChildren {
  is100Vh?: boolean
}
export const SuspenseRouteWrapper:FC<SuspenseRouteWrapperProps> = ({ children, is100Vh = false }) => {
  return (
      <Suspense
          fallback={
              <FullscreenCenter is100Vh={is100Vh}>
                  <Spinner color={'red.base'} size={'xl'} />
              </FullscreenCenter>
          }
      >
          { children }
      </Suspense>
  );
};