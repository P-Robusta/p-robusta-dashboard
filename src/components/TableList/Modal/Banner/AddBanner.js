/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
import { Button, Form, Modal } from 'react-bootstrap';
import { useState, } from 'react';
import axios from 'axios';
import { postBanner } from 'API/callAPI';

// const imgbbUploader = require('imgbb-uploader');

export default function AddBanner() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // useEffect(() => {
  // }, []);
  const uploadImage = (img) => {
    const body = new FormData();
    body.append('key', '22db36e00bee3ef919df52f806224a17');
    body.append('image', img);

    return axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body,
      headers: {
        'content-type': 'multipart/form-data',
      }
    }).then((res) => {
      console.log(res.data.data.display_url);
      return res.data.data.display_url;
    }).catch(() => false);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    const img = formDataObj.image_raw;
    let image = '';
    uploadImage(img).then((res) => {
      image = res;
    }).then(() => {
      formData.append('image', image);
      postBanner(formData).then((res) => {
        console.log(res);
      });
    });
  };
  return (
    <>
      <div>
      &emsp;&emsp;
        <Button variant="outline-danger" onClick={handleShow}>
          <i className="nc-icon nc-simple-add" />
          &ensp;
          New Banner
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={onFormSubmit} encType="multipart/form-data">
          <Modal.Header closeButton>
            <Modal.Title>Create New Banner</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Content in banner</Form.Label>
              <Form.Control id="text-content" as="textarea" rows={4} name="text" required />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose the image for banner</Form.Label>
              <Form.Control name="image_raw" type="file" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
