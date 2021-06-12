﻿const supportedLanguageMap = {
  enUS: 'English',
  zhCN: 'Chinese',
  esES: 'Spanish',
};

const LocalizationService = () => {
  const defaultLocale = 'enUS';

  const getLocales = () => {
    return supportedLanguageMap;
  };

  const getUserLocale = () => {
    let locale = window.localStorage.getItem('locale');
    if (locale) {
      return locale;
    }
    return defaultLocale;
  };

  const setUserLocale = (loc) => {
    window.localStorage.setItem('locale', loc);
  };

  const getCurrentLocale = () => {
    // OPTIONAL ADDITION: lookup current user local via browser and populate found and return this
    // https://github.com/i18next/i18next-browser-languageDetector/blob/master/src/browserLookups/navigator.js
    // see also: https://github.com/i18next/i18next-browser-languageDetector/blob/master/src/browserLookups/querystring.js
    // or https://github.com/i18next/i18next-browser-languageDetector/blob/master/src/browserLookups/path.js
    let found = [];
    if (found.length === 0) {
      return getUserLocale();
    }
    return found[0];
  };

  const getLocalizedTextSet = async (keys, locale) => {
    // async import the locale file for given locale
    // and extract the set of localized text values for given keys
    let textSet = {};
    const localizedData = await getLocalizedData(locale);
    if (localizedData) {
      let localizedTextSet = localizedData;
      const keysLocalizedTextSet = Object.keys(localizedTextSet);
      for (const desiredKey of keys) {
        for (const key of keysLocalizedTextSet) {
          if (desiredKey === key) {
            textSet[key] = localizedTextSet[key];
          }
        }
      }
    }
    return textSet;
  };

  const getLocalizedData = async (localeCode) => {
    // get data from folder in public by locale using fetch
    const localizedDataFilePath =
      process.env.PUBLIC_URL + `/i18n/${localeCode}.json`;
    return fetch(localizedDataFilePath)
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        let msg = 'Error Reading data ' + err;
        console.log(msg);
      });
  };

  return {
    setUserLocale,
    getUserLocale,
    getLocales,
    getCurrentLocale,
    getLocalizedTextSet,
  };
};

export default LocalizationService;
