import React, { useRef } from 'react';

function Toast(props) {
  const toastContainerRef = useRef(null);

  addSuccessToast = () => {
    toastContainerRef.success('', props.message, {
      timeOut: 30000,
      extendedTimeOut: 10000
    });
  };

  if (props.message == undefined) {
    return <></>;
  }
  return (
    <ToastContainer ref={toastContainerRef} toastMessageFactory={ToastMessageFactory} className="toast-top-right" />
  );
}

export default Toast;
