import qs from "qs";

const getDomainForCookie = () => {
  const hostParts = window.location.host.split(".");

  if (hostParts.length === 1) {
    // localhost or something
    return "localhost";
  }

  const topLevelDomain = hostParts.pop();
  const domain = hostParts.pop();
  return `${domain}.${topLevelDomain}`;
};

export const setCookie = (name, value, options) => {
  options = options || {};
  options.path = "/";

  var expires = options.expires;

  if (typeof expires === "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  // value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  options.domain = getDomainForCookie();

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
};

export const getCookie = (cname) => {
  const params = qs.parse(window.location.search.substring(1));
  if (cname === "access_token" && typeof params.access_token === "string") {
    return params.access_token;
  }
  if (cname === "conference_id" && typeof params.access_token === "string") {
    return params.conference_id;
  }
  if (cname === "conference_token" && typeof params.access_token === "string") {
    return params.conference_token;
  }
  return;

  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const deleteAllCookies = () => {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};

export default {
  getCookie,
  setCookie,
  deleteAllCookies,
};
