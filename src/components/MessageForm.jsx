/* eslint-disable no-param-reassign */
import React, { useContext, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { object, string } from 'yup';

import { asyncActions } from '../slices/index.js';
import UserContext from '../userContext.js';

const { addMessageAsync } = asyncActions;

const MessageForm = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const { currentChannelId } = useSelector((state) => state.channelsInfo);
  const username = useContext(UserContext);

  const handleSubmit = async (
    { text },
    { resetForm, setStatus, setSubmitting },
  ) => {
    try {
      await dispatch(addMessageAsync({ currentChannelId, username, text }));
      resetForm();
      setSubmitting(false);
    } catch (err) {
      setStatus(err.message);
    }
  };

  const validationSchema = object().shape({
    text: string().trim().required('Nobody loves empty messages'),
  });

  const formik = useFormik({
    initialValues: { text: '' },
    validationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <fieldset disabled={formik.isSubmitting}>
        <Form.Group>
          <InputGroup>
            <Form.Control
              isInvalid={!!formik.errors.text}
              name="text"
              placeholder="Enter message"
              ref={ref}
              value={formik.values.text}
              onChange={formik.handleChange}
            />
            <InputGroup.Append>
              <Button variant="primary" size="sm" type="submit">
                Submit
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <Form.Control.Feedback type="invalid" className="d-block">
            {formik.status ? formik.status : formik.errors.text}
            &nbsp;
          </Form.Control.Feedback>
        </Form.Group>
      </fieldset>
    </Form>
  );
};

export default MessageForm;
