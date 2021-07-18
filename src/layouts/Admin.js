/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';

import AdminNavbar from '../components/Navbars/AdminNavbar';
import Footer from 'components/Footer/Footer';
import Sidebar from 'components/Sidebar/Sidebar';
import FixedPlugin from 'components/FixedPlugin/FixedPlugin';
// import Login from 'components/Login/Login';
import { dashboardRoutes } from 'routes.js';

import sidebarImage from 'assets/img/sidebar-3.jpg';
// import { listTable } from 'routes';
// import { Redirect } from 'react-router-dom';
// import NotFound from '../components/Page/NotFound';
import Dashboard from 'views/Dashboard';

function Admin() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState('black');
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => routes.map((prop, key) => {
    if (prop.layout === '/admin') {
      return (
        <Route
          path={prop.layout + prop.path}
          render={(props) => <prop.component {...props} />}
          key={key}
          exact
        />
      );
    }
    return null;
  });
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993
      && document.documentElement.className.indexOf('nav-open') !== -1
    ) {
      document.documentElement.classList.toggle('nav-open');
      const element = document.getElementById('bodyClick');
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ''} routes={dashboardRoutes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Switch>
              <Route path="/admin" render={() => <Dashboard />} exact />
              <Route>
                {getRoutes(dashboardRoutes)}
              </Route>
              <Route path="/admin/*" render={() => <b> Not Found This Request</b>} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
      <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      />
    </>
  );
}

export default Admin;
