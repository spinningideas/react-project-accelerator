// service for working with local storage in browser
const LocalCacheService = () => {
  const localStorageSupported =
    typeof window["localStorage"] != "undefined" &&
    window["localStorage"] != null;

  // add data having given key to storage
  const set = (key, data) => {
    if (localStorageSupported) {
      const jsonData = JSON.stringify(data);
      localStorage.setItem(key, jsonData);
    }
  };

  // get data by key from storage
  const get = (key, defaultValue) => {
    if (localStorageSupported) {
      const data = localStorage.getItem(key);
      if (data === null) {
        return defaultValue;
      }
      try {
        return JSON.parse(data);
      } catch (error) {
        return defaultValue;
      }
    } else {
      return defaultValue;
    }
  };

  // remove value from storage
  const remove = (key) => {
    if (localStorageSupported) {
      localStorage.removeItem(key);
    }
  };

  // remove all items from storage
  const clear = () => {
    if (localStorageSupported) {
      localStorage.clear();
    }
  };

  return {
    set,
    get,
    remove,
    clear,
  };
};

export default LocalCacheService;
