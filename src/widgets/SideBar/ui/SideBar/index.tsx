import { Heading, ListItem, Stack, Icon, List } from '@chakra-ui/react';
import { Logo } from '@/shared/ui';
import { navItem } from '@/widgets/SideBar/data';
import { NavLink } from 'react-router-dom';
export const SideBar = () => {
  return (
        <Stack gap={'25px'} mx={'50px'} minWidth={'350px'}>
            <Logo/>
            <Heading fontSize={'16px'}>MAIN MENU</Heading>
            <List as={'ul'} gap={'14px'}>
                { navItem.map(item => (
                    <NavLink className={'admin-nav'} key={item.title} to={item.link}>
                        <ListItem fontSize={'18px'} py={'11px'} _hover={{ color: 'red.base' }}>
                            <Icon fontSize={'18px'} mr={'24px'} as={item.icon} />
                            { item.title }
                        </ListItem>
                    </NavLink>
                )) }
            </List>
        </Stack>
  );
};