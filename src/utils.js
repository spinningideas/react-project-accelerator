export const pascalCaseUnHyphenated = (value) => {
  return (value || '').toLowerCase().replace(/(\b|-)\w/g, function (m) {
    return m.toUpperCase().replace(/-/, ' ');
  });
};

export const generateId = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

export const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

export const loadScript = (d, s, id, jsSrc, cb) => {
  if (!d.getElementById(id)) {
    const element = d.getElementsByTagName(s)[0];
    const fjs = element;
    let js = element;
    js = d.createElement(s);
    js.id = id;
    js.src = jsSrc;
    if (fjs && fjs.parentNode) {
      fjs.parentNode.insertBefore(js, fjs);
    } else {
      d.head.appendChild(js);
    }
    js.onload = cb;
  } else {
    cb();
  }
};

export const searchAndPaginate = (searchValue, searchProps, data, pageNumber, pageSize) => {
  pageNumber = Math.abs(parseInt(pageNumber));
  pageNumber = pageNumber < 0 ? 1 : pageNumber;
  pageSize = parseInt(pageSize);
  pageSize = pageSize < 1 ? 1 : pageSize;
  searchValue = searchValue.toLowerCase();

  let results = [];
  if (data && data.length) {
    for (let i = 0, l = data.length; i < l; i++) {
      for (let p = 0, lp = searchProps.length; p < lp; p++) {
        let searchProp = searchProps[p];
        let dataSearchVal = data[i][searchProp];
        if (dataSearchVal && dataSearchVal.length > 0) {
          dataSearchVal = dataSearchVal.toLowerCase();
          if (dataSearchVal.indexOf(searchValue) > -1) {
            results.push(data[i]);
          }
        }
      }
    }
    // Page the results
    return paginate(results, pageNumber, pageSize);
  } else {
    return results;
  }
};

export const paginate = (data, pageNumber, pageSize) => {
  // pages data using a one based starting pageNumber
  // returns at most number of items specified in pageSize
  return [
    ...data.filter((value, index) => {
      return index >= (pageNumber - 1) * pageSize && index < pageNumber * pageSize;
    })
  ];
};
