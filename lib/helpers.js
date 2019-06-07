// String Helpers
function truncateText(string, chars) {
  if (string.length > chars) {
    return string.substring(0, chars) + "...";
  } else {
    return string;
  }
}

function toTitleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

// Number Helpers
function intComma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function isEven(num) {
  return num % 2 === 0;
}

// Array Helpers

// Object Helpers

function copyObject(object) {
  return JSON.parse(JSON.stringify(object));
}

// URL

function addParam(param, page) {
  var url = window.location.origin;
  url = url + ("?" + param + "=" + page);
  window.location.href = url;
}

function updateParam(param, page) {
  if (window.history.pushState) {
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + ("?" + param + "=" + page);
    window.history.pushState({ path: newurl }, "", newurl);
  }
}

// Cookies

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export { truncateText, toTitleCase, intComma, isEven, copyObject, addParam, updateParam, setCookie, getCookie };
//# sourceMappingURL=helpers.js.map
