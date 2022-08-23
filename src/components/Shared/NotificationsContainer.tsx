import React from "react";

let defaultDurationMilliseconds = 5000; // ms
/* React "Toast" Component which encapsulates a given popup style UI message - re-factored from https://github.com/k4wo/react-notify */
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

export interface INotifications {
  currentNotificationKey: number;
  notifications: INotification[];
}

export interface INotification {
  title: string;
  msg: string;
  duration: number;
  theme: string;
}

/* Notifications container - encapsulates collection of "Toast" style messages of various types (eg success, warning, error) */
// NOTE: Cannot use stateless function here as a backing instance is required.
// See https://reactjs.org/docs/components-and-props.html#stateless-functions
const NotificationsContainer = () => {
  const [state, setState] = React.useState<INotifications>({
    currentNotificationKey: 0,
    notifications: [],
  });

  const show = (msg, type) => {
    addNotification("", msg, defaultDurationMilliseconds, type);
  };

  const success = (title, msg, duration) => {
    addNotification(title, msg, duration, "success");
  };

  const error = (title, msg, duration) => {
    addNotification(title, msg, duration, "error");
  };

  const info = (title, msg, duration) => {
    addNotification(title, msg, duration, "info");
  };

  const addNotification = (title, msg, duration, type) => {
    var n = state.notifications;
    var newNotificationKey = state.currentNotificationKey;
    newNotificationKey = newNotificationKey++;
    n[newNotificationKey] = {
      title: title,
      msg: msg,
      duration: duration,
      theme: type,
    } as INotification;
    setState({
      currentNotificationKey: newNotificationKey,
      notifications: n,
    });
    hideAfterDurationElapses(duration, newNotificationKey);
  };

  const hideAfterDurationElapses = (duration, key) => {
    setTimeout(() => {
      hideNotification(key);
    }, duration);
  };

  const hideNotification = (key) => {
    var n = state.notifications;
    delete n[key];
    setState({ currentNotificationKey: 0, notifications: n });
  };

  const topStyle = window.pageYOffset + "px";
  const hide = hideNotification;

  return (
    <div style={{ top: topStyle }} className="notification-container">
      {state.notifications.map((notification, key) => {
        return React.createElement(NotificationItem, {
          id: key,
          key: key,
          theme: notification.theme,
          hideNotification: hide,
          title: notification.title,
          msg: notification.msg,
        });
      })}
      ;
    </div>
  );
};

export default NotificationsContainer;
