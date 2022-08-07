import { useLocation } from "react-router-dom";
import DefaultLayout from "layouts/DefaultLayout";

export default function Application() {
  let location = useLocation();
  return (
    <DefaultLayout selectedMenuItemKey={location.pathname}></DefaultLayout>
  );
}
