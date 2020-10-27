import React, { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { object, string } from 'yup';

import { asyncActions } from '../../slices/index.js';

const { renameChannelAsync } = asyncActions;

const Rename = (props) => {
  const { modalInfo, onHide } = props;
  const channelNames = modalInfo.data.channels.map((channel) => channel.name);

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const ref = useRef();

  const handleSubmit = async ({ name }, { setStatus }) => {
    try {
      await dispatch(
        renameChannelAsync({
          id: modalInfo.data.channel.id,
          name: name.trim(),
        }),
      );
      onHide();
    } catch (err) {
      setStatus(t(err.message));
    }
  };

  const validationSchema = object().shape({
    name: string()
      .trim()
      .min(3, t('mustBe3To20'))
      .max(20, t('mustBe3To20'))
      .required(t('nameIsRequired'))
      .notOneOf(channelNames, t('mustBeUnique')),
  });

  const formik = useFormik({
    initialValues: { name: modalInfo.data.channel.name || '' },
    validationSchema,
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
            <Modal.Title>{t('renameChannel')}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Control
              isInvalid={!!formik.errors.name}
              name="name"
              placeholder={t('enterChannelName')}
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
              {t('cancel')}
            </Button>
            <Button variant="warning" type="submit">
              {t('rename')}
            </Button>
          </Modal.Footer>
        </fieldset>
      </Form>
    </Modal>
  );
};

export default Rename;
