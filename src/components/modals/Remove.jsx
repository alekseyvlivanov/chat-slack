import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const generateOnSubmit = ({ modalInfo, setItems, onHide }) => (e) => {
  e.preventDefault();
  setItems((items) => items.filter((i) => i.id !== modalInfo.item.id));
  onHide();
};

const Remove = (props) => {
  const { onHide } = props;
  const onSubmit = generateOnSubmit(props);

  return (
    <Modal.Dialog>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Remove channel</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form noValidate onSubmit={onSubmit}>
          <Form.Group>
            <Button variant="danger" type="submit">
              Remove
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default Remove;
