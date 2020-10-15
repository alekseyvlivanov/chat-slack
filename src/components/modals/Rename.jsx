import React, { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';

const Rename = (props) => {
  const { data, show, handleHide, handleSubmit } = props;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { name: data.name || '' },
    onSubmit: ({ name }, { resetForm }) => {
      if (name.trim() !== '') {
        handleSubmit({ id: data.id, name });
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
          <Modal.Title>Rename channel</Modal.Title>
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

export default Rename;
