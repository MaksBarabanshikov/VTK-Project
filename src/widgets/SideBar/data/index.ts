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
import {
  VTKCalendarIcon,
  VTKCardIcon,
  VTKCommentIcon,
  VTKDashboardIcon,
  VTKDeckIcon,
  VTKEmailIcon,
  VTKSettingsIcon,
} from '@/app/libs/icons.tsx';

export const navItem: TNavItem[] = [
  {
    title: 'Dashboard',
    icon: VTKDashboardIcon,
    link: ADMIN_DASHBOARD,
  },
  {
    title: 'Email',
    icon: VTKEmailIcon,
    link: ADMIN_EMAIL,
  },
  {
    title: 'Chat',
    icon: VTKCommentIcon,
    link: ADMIN_CHAT,
  },
  {
    title: 'Deck',
    icon: VTKDeckIcon,
    link: ADMIN_DECK,
  },
  {
    title: 'Card',
    icon: VTKCardIcon,
    link: ADMIN_CARD,
  },
  {
    title: 'Calendar',
    icon: VTKCalendarIcon,
    link: ADMIN_CALENDAR,
  },
  {
    title: 'Settings',
    icon: VTKSettingsIcon,
    link: ADMIN_SETTINGS,
  },
];