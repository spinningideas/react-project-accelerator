import { useState, useEffect } from "react";

export const getWindowHeight = (): number => {
  return (
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  );
};

export const getWindowWidth = (): number => {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
};

const useWindowWidth = () => {
  let [width, setWidth] = useState(getWindowWidth());
  let [height, setHeight] = useState(getWindowHeight());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId: any = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.location.reload();
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => {
        setWidth(getWindowWidth());
        setHeight(getWindowHeight());
      }, 150);
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return { width: width, height: height };
};

export default useWindowWidth;
