import React, { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';

const generateOnSubmit = ({ modalInfo, setItems, onHide }) => (values) => {
  setItems((items) => {
    const item = items.find((i) => i.id === modalInfo.item.id);
    item.name = values.name;
  });
  onHide();
};

export default (props) => {
  const { onHide, modalInfo } = props;
  const { item } = modalInfo;

  const formik = useFormik({
    onSubmit: generateOnSubmit(props),
    initialValues: item,
  });

  const ref = useRef();
  useEffect(() => {
    ref.current.select();
  });

  return (
    <Modal.Dialog>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Rename channel</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Control
              required
              ref={ref}
              onChange={formik.handleChange}
              value={formik.values.name}
              name="name"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Rename
          </Button>
        </Form>
      </Modal.Body>
    </Modal.Dialog>
  );
};
