import { PlanetIcon, StatsIcon } from '@/app/libs/icons.tsx';
import { CalendarIcon, ChatIcon, EmailIcon, SettingsIcon, SunIcon } from '@chakra-ui/icons';
import { TNavItem } from '@/widgets/SideBar/model';
import {
  ADMIN_CALENDAR,
  ADMIN_CARD,
  ADMIN_CHAT,
  ADMIN_DASHBOARD,
  ADMIN_DECK,
  ADMIN_EMAIL,
  ADMIN_SETTINGS,
} from '@/app/configuration/routerPaths.ts';

export const navItem: TNavItem[] = [
  {
    title: 'Dashboard',
    icon: StatsIcon,
    link: ADMIN_DASHBOARD,
  },
  {
    title: 'Email',
    icon: EmailIcon,
    link: ADMIN_EMAIL,
  },
  {
    title: 'Chat',
    icon: ChatIcon,
    link: ADMIN_CHAT,
  },
  {
    title: 'Deck',
    icon: PlanetIcon,
    link: ADMIN_DECK,
  },
  {
    title: 'Card',
    icon: SunIcon,
    link: ADMIN_CARD,
  },
  {
    title: 'Calendar',
    icon: CalendarIcon,
    link: ADMIN_CALENDAR,
  },
  {
    title: 'Settings',
    icon: SettingsIcon,
    link: ADMIN_SETTINGS,
  },
];