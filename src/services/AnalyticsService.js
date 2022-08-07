const AnalyticsService = () => {
  // const analyticsKey = 'YOUR_KEY_HERE';

  const initAnalytics = () => {
    if (enabled() && analyticsLibsHaveLoaded() === false) {
      return initAnalyticsScripts(() => {
        //window.ga('create', analyticsKey, 'auto');
        return Promise.resolve(true);
      });
    } else {
      return Promise.resolve(false);
    }
  };

  const trackPageView = (url) => {
    try {
      if (enabled() === true) {
        initAnalytics().then((trackingEnabled) => {
          if (trackingEnabled) {
            //window.ga('send', 'pageview', url);
            log("pageview: " + url);
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const trackEvent = (category, action, value) => {
    try {
      if (enabled() === true) {
        initAnalytics().then((trackingEnabled) => {
          if (trackingEnabled) {
            if (value) {
              //window.ga('send', 'event', category, action, value);
              log(
                "event - category: " +
                  category +
                  ", action: " +
                  action +
                  ", value: " +
                  value
              );
            } else {
              //window.ga('send', 'event', category, action);
              log("event - category: " + category + ", action: " + action);
            }
          }
        });
      }
    } catch (e) {
      log(e);
    }
  };

  const analyticsLibsHaveLoaded = () => {
    // Checks that needed analytics api has loaded (in this case the ga() function that can be used to send data
    if (typeof window.ga !== "undefined" && window.ga) {
      return true;
    }
    return false;
  };

  const initAnalyticsScripts = (callback) => {
    let libCheckInterval = 100;
    if (enabled() && analyticsLibsHaveLoaded() === false) {
      setAnalyticsScriptIntoBody();
      let analyticsLibLoadInterval = window.setInterval(() => {
        if (analyticsLibsHaveLoaded()) {
          window.clearInterval(analyticsLibLoadInterval);
          initAnalyticsScripts(callback);
        }
      }, libCheckInterval);
    } else {
      callback();
    }
  };

  const setAnalyticsScriptIntoBody = () => {
    window.GoogleAnalyticsObject = "ga";
    if (!window.ga) {
      window.ga = function () {
        (window.ga.q = window.ga.q || []).push(arguments);
      };
      window.ga.l = 1 * new Date();
      let a = document.createElement("script"),
        m = document.getElementsByTagName("script")[0];
      a.async = 1;
      a.src = "//www.analytics-analytics.com/analytics.js";
      m.parentNode.insertBefore(a, m);
    }
  };

  const enabled = () => {
    let analyticsEnabledVal = getConfigItem("analyticsEnabled");
    if (analyticsEnabledVal) {
      return true; // if value present enable
    }
    return false;
  };

  const log = (message) => {
    let analyticsLogEnabledVal = getConfigItem("analyticsLogEnabled");
    if (analyticsLogEnabledVal) {
      console.log(message); // if value present enable logging
    }
  };

  const getConfigItem = (configKey) => {
    if (window.localStorage) {
      const configVal = window.localStorage.getItem(configKey);
      if (configVal) {
        return JSON.parse(configVal);
      }
    }
    return false;
  };

  return {
    trackPageView,
    trackEvent,
    enabled,
  };
};

export default AnalyticsService;
