/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import NotificationAlert from 'react-notification-alert';
// import React from 'react';
// import React, { useState } from 'react';
// react-bootstrap components
// import {
//   Col,
//   Container, Row,
// } from 'react-bootstrap';
// import { Card } from 'material-ui';
// import { Button } from 'bootstrap';
import {
  Button,
  Card,
  Col,
  Container, Row
} from 'react-bootstrap';

function CreatePost() {
  const {
    register, handleSubmit, formState: { errors }
  } = useForm();

  useEffect(() => { }, []);
  const onSubmitLogin = (data) => {
    console.log(data);
  };
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
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Create Post</Card.Title>
              </Card.Header>
              <Card.Body>
                <form method="POST" onSubmit={handleSubmit(onSubmitLogin)}>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="title"
                      className="form-control"
                      placeholder="Enter Title"
                      {...register('title', { required: true })}
                    />
                    {errors.email && (
                      <strong>
                        <span className="text-danger">This field is required</span>
                      </strong>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Short Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter short title"
                      {...register('short_title', { required: true })}
                    />
                    {errors.title && (
                      <strong>
                        <span className="text-danger">This field is required</span>
                      </strong>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Short Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter short title"
                      {...register('short_title', { required: true })}
                    />
                    {errors.short_title && (
                      <strong>
                        <span className="text-danger">This field is required</span>
                      </strong>
                    )}
                  </div>
                  <div>
                    <div className="row">
                      <div className="col lg-4">
                        <div className="form-group">
                          <label>Sumary</label>
                          <input
                            type="text"
                            className="form-control"
                            {...register('summary', { required: true })}
                          />
                          {errors.summary && (
                            <strong>
                              <span className="text-danger">This field is required</span>
                            </strong>
                          )}
                        </div>
                      </div>

                      <div className="col lg-8">
                        <div className="form-group">
                          <label>Image Cover</label>
                          <input
                            type="file"
                            className="form-control"
                            placeholder="Enter short title"
                            {...register('image_cover', { required: true })}
                          />
                          {errors.image_cover && (
                            <strong>
                              <span className="text-danger">This field is required</span>
                            </strong>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col lg-4">
                      <div className="form-group ">
                        <select name="id_category" className="form-control">
                          <option value="1">News</option>
                          <option value="2">Intro</option>
                        </select>
                      </div>
                    </div>
                    <div className="col lg-6">
                      <div className="form-group">
                        <input className="form-control" type="date" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Content</label>
                    <br />
                    <textarea name="content" rows="4" cols="50" />
                  </div>
                  <button type="button" onClick={() => notify()} className="btn btn-login btn-right">Post</button>
                  <br />
                </form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
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
                    <h5 className="title">Passerelles numériques</h5>
                  </a>
                  <p className="description">A Gateway for Life</p>
                  <p>Passerelles numériques is a French NGO created in 2005 and operating in Cambodia, the Philippines and Vietnam</p>
                </div>
              </Card.Body>
              <hr />
              <div className="button-container mr-auto ml-auto">
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
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default CreatePost;
