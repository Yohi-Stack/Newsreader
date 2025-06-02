const isLocalhost = window.location.hostname === "localhost";
export const BASE_URL = isLocalhost
  ? "http://localhost:5000"
  : process.env.REACT_APP_API_URL || window.location.origin;