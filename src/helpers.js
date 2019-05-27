// String Helpers
export function truncateText(string, chars) {
  if (string.length > chars) {
    return string.substring(0, chars) + "...";
  } else {
    return string;
  }
}

export function toTitleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

// Number Helpers
export function intComma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function isEven(num) {
  return num % 2 === 0;
}

// Array Helpers

// Object Helpers

export function copyObject(object) {
  return JSON.parse(JSON.stringify(object));
}

// URL

export function addParam(param, page) {
  var url = window.location.origin;
  url = url + `?${param}=${page}`;
  window.location.href = url;
}

export function updateParam(param, page) {
  if (window.history.pushState) {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      `?${param}=${page}`;
    window.history.pushState({ path: newurl }, "", newurl);
  }
}
