import { Heading, ListItem, Stack, Icon, List, useColorMode, IconButton, Text, Tooltip } from '@chakra-ui/react';
import { Logo } from '@/shared/ui';
import { navItem } from '@/widgets/SideBar/data';
import { NavLink } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { ActiveLine } from '@/widgets/SideBar/ui/ActiveLine';
import { LayoutGroup, motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
export const SideBar = () => {
  const sidebarState = localStorage.getItem('sidebarState') ? JSON.parse(localStorage.getItem('sidebarState')!) : true;

  const [ isOpen, setIsOpen ] = useState<boolean>(sidebarState);
  const { colorMode } = useColorMode();

  useEffect(
    () => {
      localStorage.setItem('sidebarState', JSON.stringify(isOpen));
    }, [isOpen]);

  return (
        <Stack gap={'25px'} mx={'50px'} minWidth={isOpen ? '350px' : '100px'} transition={ 'all 0.15s' } maxWidth={isOpen ? '350px' : '100px'} textAlign={isOpen ? 'left' : 'center'} m={'0 20px 0 0'} p={isOpen ? '36px 50px' : '36px 10px 36px 25px'} h={'100vh'} boxShadow={colorMode === 'light' ? '18px 4px 35px 0px rgba(0, 0, 0, 0.02)' : '18px 4px 35px 0px rgba(255, 255, 255, 0.02)'}>
            <Logo/>
            {isOpen && <Heading fontSize={'16px'}>MAIN MENU</Heading>}
            <List as={'ul'} gap={'14px'}>
                <LayoutGroup id={'nav'}>
                    { navItem.map(item => (
                        <NavLink className={'admin-nav'} key={item.title} to={item.link}>
                            {({ isActive }) => (
                                <Fragment>
                                    { isActive && <ActiveLine />}
                                    <Tooltip isDisabled={isOpen} label={item.title} placement={'right'}>
                                        <ListItem as={motion.li} fontSize={'18px'} py={'11px'} maxH={'49px'} overflow={'hidden'} _hover={{ color: 'red.base' }}>
                                            <Icon fontSize={'18px'} mr={'24px'} as={item.icon} />
                                            <Text as={'span'} whiteSpace={'break-spaces'} maxWidth={'100px'} overflow={'hidden'}>{isOpen && item.title }</Text>
                                        </ListItem>
                                    </Tooltip>
                                </Fragment>
                            )}
                        </NavLink>
                    )) }
                </LayoutGroup>
            </List>
            <IconButton aria-label={'responsive-sidebar'} variant={'shadowed'} onClick={() => setIsOpen(prevState => !prevState)}>
                { isOpen ? <ArrowLeftIcon />  : <ArrowRightIcon/> }
            </IconButton>
        </Stack>
  );
};