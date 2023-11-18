import { useSnackbar, VariantType } from "notistack";

/* Notifications Service - encapsulates collection of "Toast" style 
messages of given type (eg success, warning, error) 

NOTE: Assumes setup of notistack SnackbarProvider at the application level
*/
const NotificationsService = () => {
  const { enqueueSnackbar } = useSnackbar();

  const show = (msg: string, type?: string) => {
    addNotification(msg, type ? (type as VariantType) : "success");
  };

  const success = (msg: string) => {
    addNotification(msg, "success");
  };

  const error = (msg: string) => {
    addNotification(msg, "error");
  };

  const info = (msg: string) => {
    addNotification(msg, "info");
  };

  const addNotification = (msg: string, type: VariantType) => {
    // variant can be success, error, warning, info, or default
    enqueueSnackbar(msg, { variant: type });
  };

  return {
    show,
    success,
    error,
    info,
  };
};

export default NotificationsService;
