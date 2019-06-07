import { useState, useEffect } from 'react';

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var render = function render(data) {
  return function (match) {
    return data.pending ? match.pending() : data.error ? match.error(data.error) : data.data ? match.data(data.data) : null;
  };
}; // prettier-ignore

var useMatchFetch = function useMatchFetch(url) {
  var _useState = useState({ pending: true }),
      _useState2 = slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  useEffect(function () {
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setData({ data: data, pending: false });
    }).catch(function (error) {
      return setData({ error: error, pending: false });
    });
  }, [url]);

  return render(data);
};

export { useMatchFetch };
//# sourceMappingURL=useMatchFetch.js.map
