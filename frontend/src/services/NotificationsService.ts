import { toastError, toastInfo, toastSuccess } from "@/hooks/use-toast";

/* Notifications Service - encapsulates collection of "Toast" style 
messages of given type (eg success, warning, error) 

NOTE: Uses custom css in index.css and custom toast component in Toast.tsx
*/
const NotificationsService = () => {
  const show = (
    message: string,
    type: "success" | "error" | "info" = "info",
  ) => {
    switch (type) {
      case "success":
        toastSuccess(message);
        break;
      case "error":
        toastError(message);
        break;
      case "info":
      default:
        toastInfo(message);
        break;
    }
  };

  return {
    show,
  };
};

export default NotificationsService;
