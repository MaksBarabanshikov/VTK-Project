import { Heading, ListItem, Stack, Icon, List, useColorMode } from '@chakra-ui/react';
import { Logo } from '@/shared/ui';
import { navItem } from '@/widgets/SideBar/data';
import { NavLink } from 'react-router-dom';
import { Fragment } from 'react';
import { ActiveLine } from '@/widgets/SideBar/ui/ActiveLine';
import { LayoutGroup, motion } from 'framer-motion';
export const SideBar = () => {
  const { colorMode } = useColorMode();
  return (
        <Stack gap={'25px'} mx={'50px'} minWidth={'350px'} m={'0 20px 0 0'} p={'36px 50px'} h={'100vh'} boxShadow={colorMode === 'light' ? '18px 4px 35px 0px rgba(0, 0, 0, 0.02)' : '18px 4px 35px 0px rgba(255, 255, 255, 0.02)'}>
            <Logo/>
            <Heading fontSize={'16px'}>MAIN MENU</Heading>
            <List as={'ul'} gap={'14px'}>
                <LayoutGroup id={'nav'}>
                    { navItem.map(item => (
                        <NavLink className={'admin-nav'} key={item.title} to={item.link}>
                            {({ isActive }) => (
                                <Fragment>
                                    { isActive && <ActiveLine />}
                                    <ListItem as={motion.li} fontSize={'18px'} py={'11px'} _hover={{ color: 'red.base' }}>
                                        <Icon fontSize={'18px'} mr={'24px'} as={item.icon} />
                                        { item.title }
                                    </ListItem>
                                </Fragment>
                            )}
                        </NavLink>
                    )) }
                </LayoutGroup>
            </List>
        </Stack>
  );
};