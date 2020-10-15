import React, { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';

const Add = (props) => {
  const { show, handleHide, handleSubmit } = props;

  const formik = useFormik({
    initialValues: { name: '' },
    onSubmit: ({ name }, { resetForm }) => {
      if (name.trim() !== '') {
        handleSubmit({ name });
        resetForm();
      }
    },
  });

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });

  return (
    <Modal show={show} onHide={handleHide}>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add channel</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Control
            name="name"
            placeholder="Enter channel name"
            ref={ref}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleHide}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Add;
