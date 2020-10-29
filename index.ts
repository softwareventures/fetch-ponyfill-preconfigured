import fetchPonyfill = require("fetch-ponyfill");
import Promise from "promise-ponyfill";

export const {fetch, Request, Response, Headers, DOMException} = fetchPonyfill({Promise});
