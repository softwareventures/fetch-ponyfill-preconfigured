# fetch-ponyfill-preconfigured

Preconfigured `fetch` [ponyfill][1] based on [fetch-ponyfill][2] and
[promise-ponyfill][3].

A ponyfill is like a polyfill, but it does not alter the global
namespace.


## Why?

This module preconfigures fetch-ponyfill so you don't have to think
about it. Just import this module and use it like the regular `fetch`
API.


## Install

```bash
npm install --save @softwareventures/fetch-ponyfill-preconfigured
```

or for yarn users:

```bash
yarn add @softwareventures/fetch-ponyfill-preconfigured
```


## Copyright

See [LICENSE.md](LICENSE.md) for copyright and licensing information
pertaining to this module.

fetch-ponyfill and promise-ponyfill have their own separate copyright
and licensing terms. See the documentation for those modules.


  [1]: https://ponyfill.com/
  [2]: https://www.npmjs.com/package/fetch-ponyfill
  [3]: https://www.npmjs.com/package/promise-ponyfill