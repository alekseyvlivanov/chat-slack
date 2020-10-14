import React, { useContext, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { actions } from '../slices/index.js';
import UserContext from '../userContext.js';

const { addMessage } = actions;

const MessageForm = () => {
  const dispatch = useDispatch();
  const { currentChannelId } = useSelector((state) => state.channelsInfo);

  const ref = useRef();
  const username = useContext(UserContext);

  const handleSubmit = ({ text }, { resetForm, setSubmitting }) => {
    if (text.trim() !== '') {
      dispatch(addMessage({ currentChannelId, username, text }));
      resetForm();
    }
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Form.Control
            disabled={formik.isSubmitting}
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
      </Form.Group>
    </Form>
  );
};

export default MessageForm;
