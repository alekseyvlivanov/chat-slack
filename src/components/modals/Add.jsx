import React, { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { asyncActions } from '../../slices/index.js';

const { addChannelAsync } = asyncActions;

const Add = (props) => {
  const { modalInfo, onHide } = props;
  const channelNames = modalInfo.data.map((channel) => channel.name);

  const dispatch = useDispatch();
  const ref = useRef();

  const handleSubmit = async ({ name }, { setStatus }) => {
    try {
      await dispatch(addChannelAsync({ name }));
      onHide();
    } catch (err) {
      setStatus(err.message);
    }
  };

  const validate = (values) => {
    const errors = {};
    const name = values.name.trim();
    if (name.length < 3 || name.length > 20) {
      errors.name = 'Must be 3 to 20 characters';
    } else if (channelNames.find((n) => n === name)) {
      errors.name = 'Must be unique';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: { name: '' },
    validate,
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
            <Modal.Title>Add channel?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              isInvalid={!!formik.errors.name}
              name="name"
              placeholder="Enter channel name"
              ref={ref}
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <Form.Control.Feedback type="invalid" className="d-block">
              {formik.status ? formik.status : formik.errors.name}
            </Form.Control.Feedback>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Modal.Footer>
        </fieldset>
      </Form>
    </Modal>
  );
};

export default Add;
