/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Dashboard from 'views/Dashboard';
import TableList from 'views/TableList';
// import Typography from 'views/Typography';
import Notifications from 'views/Notifications';
import Login from 'components/Login/Login';
import Icons from 'views/Icons';
import Profile from 'views/Profile';
import Admin from 'layouts/Admin';
import CreatePost from 'views/CreatePost';
import Banner from './components/TableList/Banner';
import NumberOverview from './components/TableList/NumberOverview';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'nc-icon nc-chart-pie-35',
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: 'nc-icon nc-attach-87',
    component: Profile,
    layout: '/admin',
  },
  {
    path: '/post',
    name: 'Create Post',
    icon: 'nc-icon nc-album-2',
    component: CreatePost,
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
    path: '/notifications',
    name: 'Notifications',
    icon: 'nc-icon nc-bell-55',
    component: Notifications,
    layout: '/admin',
  },
  {
    path: '/icon',
    name: 'Choose Icon',
    icon: 'nc-icon nc-satisfied',
    component: Icons,
    layout: '/admin',
  },
  {
    path: '/table/banner',
    name: 'Banner',
    middle_path: 'table',
    component: Banner,
    layout: '/admin',
  },
  {
    path: '/table/number_overwiew',
    name: 'Number Overview',
    middle_path: 'table',
    component: NumberOverview,
    layout: '/admin',
  }
];

const routeTable = [
  {
    path: '/table/banner',
    name: 'Banner',
    middle_path: 'table',
    component: Banner,
    layout: '/admin',
  },
  {
    path: '/table/number_overwiew',
    name: 'Number Overview',
    middle_path: 'table',
    component: NumberOverview,
    layout: '/admin',
  }
];

const indexRoutes = [
  {
    path: '/login',
    name: 'Notifications',
    component: Login,
    layout: '/login',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Admin,
    layout: '/admin',
  }
];

export { dashboardRoutes, indexRoutes, routeTable };
