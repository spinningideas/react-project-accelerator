import { useToast } from "@/components/shared/Toast";

/* Notifications Service - encapsulates collection of "Toast" style 
messages of given type (eg success, warning, error) 

NOTE: Uses custom css in index.css and custom toast component in Toast.tsx
*/
const NotificationsService = () => {
  const { success, error, info, showToast } = useToast();

  const show = (
    message: string,
    type: "success" | "error" | "info" | "default" = "info",
  ) => {
    switch (type) {
      case "success":
        success(message);
        break;
      case "error":
        error(message);
        break;
      case "info":
        info(message);
        break;
      case "default":
      default:
        showToast(message, "default");
        break;
    }
  };

  return {
    show,
  };
};

export default NotificationsService;
