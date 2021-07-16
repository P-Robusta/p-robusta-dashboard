/* eslint-disable import/no-unresolved */
import React from 'react';
import NotificationAlert from 'react-notification-alert';

// react-bootstrap components
import {
  Card,
  Table,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Accordion,
function TableList() {
  const notificationAlertRef = React.useRef(null);
  const notify = (place = 'tr') => {
    const type = 'warning';
    let options = {};
    options = {
      place,
      message: (
        <div>
          <div>
            <b>This table says: </b>
            {' '}
            This function is incomplete
          </div>
        </div>
      ),
      type,
      icon: 'nc-icon nc-tag-content',
      autoDismiss: 5,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  return (
    <>
      <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">List Of Table In Database</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">Number List</th>
                      <th className="border-0">Name Of Table</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Banner</td>
                      <td>
                        <Link to="#" onClick={() => notify()} variant="default"> Manage This Table</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Categories</td>
                      <td>
                        <Link to="#" onClick={() => notify()} variant="default"> Manage This Table</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Join Us</td>
                      <td>
                        <Link to="#" onClick={() => notify()} variant="default"> Manage This Table</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Notification</td>
                      <td>
                        <Link to="#" onClick={() => notify()} variant="default"> Manage This Table</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Number Overviews</td>
                      <td>
                        <Link to="#" onClick={() => notify()} variant="default"> Manage This Table</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Posts</td>
                      <td>
                        <Link to="#" onClick={() => notify()} variant="default"> Manage This Table</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Staff</td>
                      <td>
                        <Link to="#"> Manage This Table</Link>
                      </td>
                    </tr>
                  </tbody>

                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
