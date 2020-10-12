import React, { useContext, useEffect, useRef } from 'react';
import { useFormik } from 'formik';

import UserContext from '../userContext.js';

const MessageForm = () => {
  const username = useContext(UserContext);

  const handleSubmit = (values, { resetForm }) => {
    if (values.message.trim() !== '') {
      console.log(username, values);
      resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      message: '',
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
            ref={ref}
            onChange={formik.handleChange}
            className="form-control"
            name="message"
            value={formik.values.message}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary btn-sm">
              Submit
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default MessageForm;
