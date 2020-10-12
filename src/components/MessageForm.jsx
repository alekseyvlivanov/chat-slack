import React, { useContext, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { connect } from 'react-redux';
import { useFormik } from 'formik';

import * as actions from '../actions/index.js';
import store from '../store.js';
import UserContext from '../userContext.js';

const mapStateToProps = ({ currentChannelId }) => {
  return { currentChannelId };
};

const MessageForm = (props) => {
  const { currentChannelId } = props;
  const username = useContext(UserContext);

  const handleSubmit = ({ text }, { resetForm, setSubmitting }) => {
    if (text.trim() !== '') {
      store.dispatch(actions.addMessage({ currentChannelId, username, text }));
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

  const ref = useRef();

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

export default connect(mapStateToProps)(MessageForm);
