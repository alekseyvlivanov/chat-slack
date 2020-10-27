import React, { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { asyncActions } from '../../slices/index.js';

const { removeChannelAsync } = asyncActions;

const Remove = (props) => {
  const { modalInfo, onHide } = props;

  const dispatch = useDispatch();
  const ref = useRef();

  const handleSubmit = async (values, { setStatus }) => {
    try {
      await dispatch(removeChannelAsync({ id: modalInfo.data.id }));
      onHide();
    } catch (err) {
      setStatus(err.message);
    }
  };

  const formik = useFormik({
    initialValues: { name: modalInfo.data.name || '' },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });

  return (
    <Modal show onHide={onHide}>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <fieldset disabled={formik.isSubmitting}>
          <Modal.Header closeButton>
            <Modal.Title>Remove channel?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Control
              name="name"
              readOnly
              ref={ref}
              value={formik.values.name}
            />
            <Form.Control.Feedback type="invalid" className="d-block">
              {formik.status}
            </Form.Control.Feedback>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancel
            </Button>
            <Button variant="danger" type="submit">
              Remove
            </Button>
          </Modal.Footer>
        </fieldset>
      </Form>
    </Modal>
  );
};

export default Remove;
