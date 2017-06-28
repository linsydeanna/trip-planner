import React from 'react';
import { MdClose } from 'react-icons/lib/md';

import Card from './Card';
import store from '../../store/store';
import { removeNotification } from '../../actions/actions';

import '../../styles/components/ui/_Notification.scss';

const handleClose = key => {
  store.dispatch(removeNotification({key}));
};

const Notification = ({ notificationKey, severity, message }) => {
  let className = `notification ${severity}`;
  return (
    <Card className={className}>
      <p className="message">{message}</p>
      <div className="close-icon" onClick={e => handleClose(notificationKey)}>
        <MdClose />
      </div>
    </Card>
  );
};

export default Notification;
