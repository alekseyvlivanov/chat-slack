import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import i18next from 'i18next';

import Channel from './Channel';
import getModal from './modals/index.js';

const renderModal = ({ modalInfo, hideModal }) => {
  if (!modalInfo.type) {
    return null;
  }

  const Component = getModal(modalInfo.type);
  return <Component modalInfo={modalInfo} onHide={hideModal} />;
};

const ChannelsList = () => {
  const { t } = useTranslation();
  const switchLanguage = async () => {
    await i18next.changeLanguage(t('nextLang'));
  };

  const { channels, currentChannelId } = useSelector(
    (state) => state.channelsInfo,
  );

  const [modalInfo, setModalInfo] = useState({ type: null, data: null });
  const hideModal = () => setModalInfo({ type: null, data: null });
  const showModal = (type, data) => setModalInfo({ type, data });

  const handleShowAdd = () => showModal('adding', channels);
  const handleShowRemove = (channel) => () => showModal('removing', channel);
  const handleShowRename = (channel) => () =>
    showModal('renaming', { channels, channel });

  return (
    <>
      <Col
        xs="3"
        className="d-flex flex-column h-100 border-right overflow-auto"
      >
        <div className="d-flex justify-content-between align-items-center pt-2 pb-1 px-1">
          <span className="my-0 p-0">
            <span className="h6 m-0 p-0">{t('channels')}</span>
          </span>
          <Button
            variant
            size="sm"
            className="my-0 p-0"
            onClick={handleShowAdd}
          >
            <span className="h6 m-0 p-0" title={t('add')}>
              +
            </span>
          </Button>
          <Button
            variant
            size="sm"
            className="my-0 p-0"
            onClick={switchLanguage}
          >
            <span className="h6 m-0 p-0">{t('lang')}</span>
          </Button>
        </div>
        <Nav variant="pills" className="mt-1 mb-3 d-flex flex-column">
          {channels.map((channel) => (
            <Channel
              key={channel.id}
              channel={channel}
              currentChannelId={currentChannelId}
              handleShowRemove={handleShowRemove(channel)}
              handleShowRename={handleShowRename(channel)}
            />
          ))}
        </Nav>
      </Col>
      {renderModal({ modalInfo, hideModal })}
    </>
  );
};

export default ChannelsList;
