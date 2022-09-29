// Client ID: 9758dbff-4960-4f13-b0cc-70d85bce109f
// Client secret: atZvSUbv6XAKLNL0MwhFTLF3nr443qGa76jFuIur
export const loginURL = "/oauth/token";
export const userURL = "/api/user";

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem("authUser"));
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer " + tokenData.access_token,
  };
  return headers;
};
