export const APPBASEPATH = "react-project-accelerator";

export const reloadWindow = (route?: string): void => {
  const routeReloadSegment = route ? route : "";
  const newUrl = window.location.origin
    ? window.location.origin + "/" + APPBASEPATH + routeReloadSegment
    : window.location.protocol +
      "/" +
      window.location.host +
      "/" +
      APPBASEPATH +
      routeReloadSegment;

  window.location.replace(newUrl);
};

export function capitalize(value) {
  if (value && value.length > 0) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  return value;
}

export const pascalCaseUnHyphenated = (value) => {
  return (value || "").toLowerCase().replace(/(\b|-)\w/g, function (m) {
    return m.toUpperCase().replace(/-/, " ");
  });
};

export const generateId = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

export const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
