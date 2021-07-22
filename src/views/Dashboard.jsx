/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import ChartistGraph from 'react-chartist';
import {
  Card,
  Container,
  Row,
  Col,
  // eslint-disable-next-line no-unused-vars
  Button
} from 'react-bootstrap';
import { callAPI } from 'API/callAPI';

function Dashboard() {
  const [listOverview, setList] = useState();

  useEffect(() => {
    callAPI('number_overviews').then((data) => {
      setList(data);
    });
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-badge text-warning" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Number Of Current Student</p>
                      <Card.Title as="h4">
                        {listOverview && listOverview.current_students}
                        {' '}
                        students
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr />
                <div className="stats">
                  <i className="fas fa-redo mr-1" />
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-badge text-success" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Number Of Current Alumni</p>
                      <Card.Title as="h4">{listOverview && listOverview.alumni}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr />
                <div className="stats">
                  <i className="fas fa-redo mr-1" />
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart-pie-35 text-danger" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Rate of getting a job</p>
                      <Card.Title as="h4">
                        {listOverview && listOverview.percent_get_job}
                        %
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr />
                <div className="stats">
                  <i className="fas fa-redo mr-1" />
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-primary" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total of student</p>
                      <Card.Title as="h4">
                        {listOverview && listOverview.total_students}
                        {' '}
                        students
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr />
                <div className="stats">
                  <i className="fas fa-redo mr-1" />
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="9">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Donation</Card.Title>
                <p className="card-category">12 months performance</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'June',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ],
                      series: [
                        [100, 385, 490, 492, 554, 586, 698, 695, 700, 800, 815, 890],
                        [200, 152, 143, 240, 287, 335, 435, 437, 600, 570, 712, 850],
                        [130, 113, 67, 108, 190, 239, 307, 308, 400, 470, 500, 700],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 900,
                      showArea: false,
                      height: '245px',
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        'screen and (max-width: 640px)',
                        {
                          axisX: {
                            labelInterpolationFnc(value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info" />
                  Partner
                  {' '}
                  <i className="fas fa-circle text-danger" />
                  Volunteer
                  {' '}
                  <i className="fas fa-circle text-warning" />
                  Other Organization
                </div>
                <hr />
                <div className="stats">
                  <i className="fas fa-history" />
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="3">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require('assets/img/photo-1431578500526-4d9613015464.jpeg')
                      .default
                  }
                />
              </div>
              <Card.Body>
                <div className="author">
                  <a href="https://www.facebook.com/passerelles.numeriques">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require('assets/img/faces/pn-logo.png').default}
                    />
                    <h5 className="title"><b>TOP dornors</b></h5>
                  </a>
                  <p className="description text-left">
                    <b className="text-warning">TOP 1:</b>
                    {' '}
                    Cư Nguyễn
                  </p>
                  <p className="description text-left">
                    <b className="text-danger text-left">TOP 2:</b>
                    {' '}
                    Nguyễn Ngọc Huy
                  </p>
                  <p className="description text-left">
                    <b className="text-primary text-left">TOP 3:</b>
                    {' '}
                    Phạm Anh Tuấn
                  </p>
                  <p className="description text-left">
                    <b className="text-left">TOP 4:</b>
                    {' '}
                    Nguyễn Thị Diễm
                  </p>
                  <p className="description text-left">
                    <b className="text-left">TOP 5:</b>
                    {' '}
                    Lê Thị Hồng Hạnh
                  </p>
                </div>
              </Card.Body>
              <hr />
              <br />
              {/* <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square" />
                </Button>
              </div> */}
            </Card>
          </Col>
          {/* <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Email Statistics</Card.Title>
                <p className="card-category">Last Campaign Performance</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ['40%', '20%', '40%'],
                      series: [40, 20, 40],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info" />
                  Open
                  {' '}
                  <i className="fas fa-circle text-danger" />
                  Bounce
                  {' '}
                  <i className="fas fa-circle text-warning" />
                  Unsubscribe
                </div>
                <hr />
                <div className="stats">
                  <i className="far fa-clock" />
                  Campaign sent 2 days ago
                </div>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
        {/* <Row>
          <Col md="10">
            <Card>
              <Card.Header>
                <Card.Title as="h4">2017 Sales</Card.Title>
                <p className="card-category">All products including Taxes</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'Mai',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ],
                      series: [
                        [
                          542,
                          443,
                          320,
                          780,
                          553,
                          453,
                          326,
                          434,
                          568,
                          610,
                          756,
                          895,
                        ],
                        [
                          412,
                          243,
                          280,
                          580,
                          453,
                          353,
                          300,
                          364,
                          368,
                          410,
                          636,
                          695,
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      height: '245px',
                    }}
                    responsiveOptions={[
                      [
                        'screen and (max-width: 640px)',
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc(value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info" />
                  Tesla Model S
                  {' '}
                  <i className="fas fa-circle text-danger" />
                  BMW 5 Series
                </div>
                <hr />
                <div className="stats">
                  <i className="fas fa-check" />
                  Data information certified
                </div>
              </Card.Footer>
            </Card>
          </Col> */}
        {/*
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Tasks</Card.Title>
                <p className="card-category">Backend development</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Sign contract for What are conference organizers
                          afraid of?
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={(
                              <Tooltip id="tooltip-488980961">
                                Edit Task..
                              </Tooltip>
                            )}
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit" />
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-506045838">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times" />
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Lines From Great Russian Literature? Or E-mails From
                          My Boss?
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={(
                              <Tooltip id="tooltip-537440761">
                                Edit Task..
                              </Tooltip>
                            )}
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit" />
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-21130535">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times" />
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Flooded: One year later, assessing what was lost and
                          what was found when a ravaging rain swept through
                          metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={(
                              <Tooltip id="tooltip-577232198">
                                Edit Task..
                              </Tooltip>
                            )}
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit" />
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-773861645">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times" />
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Create 4 Invisible User Experiences you Never Knew
                          About
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={(
                              <Tooltip id="tooltip-422471719">
                                Edit Task..
                              </Tooltip>
                            )}
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit" />
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-829164576">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times" />
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>Read &rdquo;Following makes Medium better&rdquo;</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={(
                              <Tooltip id="tooltip-160575228">
                                Edit Task..
                              </Tooltip>
                            )}
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit" />
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-922981635">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times" />
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                disabled
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>Unfollow 5 enemies from twitter</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={(
                              <Tooltip id="tooltip-938342127">
                                Edit Task..
                              </Tooltip>
                            )}
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit" />
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-119603706">Remove..</Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times" />
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr />
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin" />
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default Dashboard;
