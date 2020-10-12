import React, { useContext, useEffect, useRef } from 'react';
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
    <form noValidate onSubmit={formik.handleSubmit}>
      <fieldset>
        <div className="input-group">
          <input
            className="form-control"
            disabled={formik.isSubmitting}
            name="text"
            placeholder="Enter message"
            ref={ref}
            value={formik.values.text}
            onChange={formik.handleChange}
          />
          <div className="input-group-append">
            <button className="btn btn-primary btn-sm" type="submit">
              Submit
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default connect(mapStateToProps)(MessageForm);
