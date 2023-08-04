import { Grid, GridItem } from '@chakra-ui/react';
import { ThemeToggle } from '@/feature/ThemeToggle';
import { Search } from '@/feature/Search';
import { User } from '@/feature/User';

export const Header = () => {
  return (
      <Grid as={'header'} h={'110px'} templateColumns={'4fr 2fr 1fr'} gap={'90px'} py={'24px'} alignItems={'center'}>
          <GridItem h={'full'}>
              <Search/>
          </GridItem>
          <GridItem h={'full'}>
              <User />
          </GridItem>
          <GridItem textAlign={'end'}>
              <ThemeToggle />
          </GridItem>
      </Grid>
  );
};