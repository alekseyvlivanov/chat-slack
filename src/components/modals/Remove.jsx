import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Remove = (props) => {
  const { data, show, handleHide, handleSubmit } = props;

  return (
    <Modal show={show} onHide={handleHide}>
      <Form noValidate onSubmit={handleSubmit(data.id)}>
        <Modal.Header closeButton>
          <Modal.Title>Remove channel</Modal.Title>
        </Modal.Header>

        <Modal.Body>{data.name}</Modal.Body>

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

export default Remove;
