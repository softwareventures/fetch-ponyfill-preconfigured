import fetchPonyfill = require("fetch-ponyfill");

export const {fetch, Request, Response, Headers, DOMException} = fetchPonyfill();
