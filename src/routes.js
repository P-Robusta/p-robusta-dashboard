/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Dashboard from 'views/Dashboard';
import UserProfile from 'views/UserProfile';
import TableList from 'views/TableList';
import Typography from 'views/Typography';
import Maps from 'views/Maps';
import Notifications from 'views/Notifications';
import Login from 'components/Login/Login';
import AdminLayout from 'layouts/Admin';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'nc-icon nc-chart-pie-35',
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/user',
    name: 'Create Post',
    icon: 'nc-icon nc-circle-09',
    component: UserProfile,
    layout: '/admin',
  },
  {
    path: '/table',
    name: 'Table List',
    icon: 'nc-icon nc-notes',
    component: TableList,
    layout: '/admin',
  },
  {
    path: '/typography',
    name: 'Typography',
    icon: 'nc-icon nc-paper-2',
    component: Typography,
    layout: '/admin',
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: 'nc-icon nc-pin-3',
    component: Maps,
    layout: '/admin',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'nc-icon nc-bell-55',
    component: Notifications,
    layout: '/admin',
  },
];

const indexRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    component: AdminLayout
  }
];
export { dashboardRoutes, indexRoutes };
