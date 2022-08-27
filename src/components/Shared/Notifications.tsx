import React from "react";

const DEFAULT_DISPLAYDURATION_MILLISECONDS = 5000;
/* 
React "Toast" Component which encapsulates a given popup style UI message 
*/

function NotificationItem(props) {
  const hideNotification = () => {
    props.hideNotification(props.id);
  };

  return React.createElement(
    "div",
    {
      className: "notification-item " + props.theme,
      onClick: hideNotification,
    },
    React.createElement("p", { className: "notification-title" }, props.title),
    React.createElement("p", { className: "notification-body" }, props.msg)
  );
}

/* 
Notifications container - encapsulates collection of "Toast" style messages of various types (eg success, warning, error) 

NOTE: Cannot use stateless function here as a backing instance is required.
*/
class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentNotificationKey: 0, notifications: [] };
  }

  show = (msg, type) => {
    this.addNotification("", msg, DEFAULT_DISPLAYDURATION_MILLISECONDS, type);
  };

  success = (title, msg, duration) => {
    this.addNotification(title, msg, duration, "success");
  };

  error = (title, msg, duration) => {
    this.addNotification(title, msg, duration, "error");
  };

  info = (title, msg, duration) => {
    this.addNotification(title, msg, duration, "info");
  };

  addNotification = (title, msg, duration, type) => {
    var n = this.state.notifications;
    var newNotificationKey = this.state.currentNotificationKey;
    newNotificationKey = newNotificationKey++;
    n[newNotificationKey] = {
      title: title,
      msg: msg,
      duration: duration,
      theme: type,
    };
    this.setState({
      currentNotificationKey: newNotificationKey,
      notifications: n,
    });
    this.hideAfterDurationElapses(duration, newNotificationKey);
  };

  hideAfterDurationElapses = (duration, key) => {
    setTimeout(() => {
      this.hideNotification(key);
    }, duration);
  };

  hideNotification = (key) => {
    var n = this.state.notifications;
    delete n[key];
    this.setState({ notifications: n });
  };

  render() {
    var topStyle = window.pageYOffset + "px";
    var hide = this.hideNotification;
    var el = this.state.notifications.map((notification, key) => {
      return React.createElement(NotificationItem, {
        id: key,
        key: key,
        theme: notification.theme,
        hideNotification: hide,
        title: notification.title,
        msg: notification.msg,
      });
    });
    return React.createElement(
      "div",
      { style: { top: topStyle }, className: "notification-container" },
      el
    );
  }
}

export default Notifications;
