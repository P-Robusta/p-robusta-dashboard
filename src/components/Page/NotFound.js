/* eslint-disable import/no-unresolved */
import { Helmet } from 'react-helmet';

const NotFound = () => (
  <>
    <Helmet>
      <title>404 | Not Found this Page</title>
    </Helmet>
    <div className="outer-login">
      <div className="inner-login">
        <h3>Not Found this Page</h3>
      </div>
    </div>

  </>
);

export default NotFound;
