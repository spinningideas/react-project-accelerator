import { toast } from "sonner";

/* Notifications Service - encapsulates collection of "Toast" style 
messages of given type (eg success, warning, error) 

NOTE: Uses sonner toast system
*/
const NotificationsService = () => {
  const show = (message: string, type: "success" | "error" | "info" = "info") => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "info":
      default:
        toast.info(message);
        break;
    }
  };

  return {
    show,
  };
};

export default NotificationsService;
