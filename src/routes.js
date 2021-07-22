/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Dashboard from 'views/Dashboard';
import TableList from 'views/TableList';
// import Typography from 'views/Typography';
import Notifications from 'views/Notifications';
import Icons from 'views/Icons';
import Profile from 'views/Profile';
import CreatePost from 'views/CreatePost';
import UpdatePost from 'components/TableList/Posts/UpdatePost.js';
import Banner from './components/TableList/Banner/Banner.js';
import NumberOverview from './components/TableList/NumberOverview/NumberOverview';
import ListPost from './components/TableList/Posts/ListPost';
import Partner from './components/TableList/Partner/Partner';
import JoinUs from './components/TableList/JoinUs/JoinUs';
import Feedback from './components/TableList/Feedback/Feedback';
import UpdateBanner from './components/TableList/Banner/UpdateBanner';
import Donors from './views/Donors.jsx';
import UpdatePartner from './components/TableList/Partner/UpdatePartner';

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
    path: '/donors',
    name: 'Donors',
    icon: 'nc-icon nc-chart-bar-32',
    component: Donors,
    layout: '/admin',
  },
  {
    path: '/icon',
    name: 'Choose Icon',
    icon: 'nc-icon nc-satisfied',
    component: Icons,
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
  },
  {
    path: '/table/post',
    name: 'Post',
    middle_path: 'table',
    component: ListPost,
    layout: '/admin',
  },
  {
    path: '/table/partner',
    name: 'Partner',
    middle_path: 'table',
    component: Partner,
    layout: '/admin',
  },
  {
    path: '/table/join_us',
    name: 'Join Us',
    middle_path: 'table',
    component: JoinUs,
    layout: '/admin',
  },
  {
    path: '/table/feedback',
    name: 'Feedback',
    middle_path: 'table',
    component: Feedback,
    layout: '/admin',
  }
];

const edit = [
  {
    path: '/table/banner/:id/edit',
    component: UpdateBanner,
    layout: '/admin',
  },
  {
    path: '/table/post/:id/edit',
    component: UpdatePost,
    layout: '/admin',
  },
  {
    path: '/table/partner/:id/edit',
    component: UpdatePartner,
    layout: '/admin',
  }
];
export { dashboardRoutes, edit, routeTable };
