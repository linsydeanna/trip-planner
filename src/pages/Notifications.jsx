import React from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group'

import Notification from '../components/ui/Notification';

class Notifications extends React.Component {

  render() {
    const { notifications }  = this.props;
    return (
      <div className="notifications">
        <CSSTransitionGroup
          transitionName="notification"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
        {
          notifications.map(({ key, severity, message }) => {
            return (
              <Notification
                key={key}
                notificationKey={key}
                severity={severity || 'default'}
                message={message} />
            );
          })
        }
        </CSSTransitionGroup>
      </div>
    );
  }

}

const mapStoreToProps = store => {
  return {
    notifications: store.notifications
  };
};

export default connect(mapStoreToProps)(Notifications);
