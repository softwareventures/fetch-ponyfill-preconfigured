# Not Recommended

This library used to incorporate a `Promise` ponyfill to support the
implementation of `fetch`, but every reasonably-modern platform now includes
a high-quality native implementation of `Promise`.

Therefore, this library is now just a trivial wrapper around
[fetch-ponyfill][2] that uses the native `Promise` implementation.

This library is no longer maintained, and is not recommended for new projects.

For new projects, use [fetch-ponyfill][2] directly, or consider
[cross-fetch][4] instead.


# fetch-ponyfill-preconfigured

Preconfigured `fetch` [ponyfill][1] based on [fetch-ponyfill][2].

A ponyfill is like a polyfill, but it does not alter the global
namespace.


## Why?

This library used to incorporate a `Promise` ponyfill and would preconfigure
fetch-ponyfill to use the bundled `Promise`, so that developers could just
import `fetch` and use it without having to worry about how to configure it.

However, every reasonably-modern platform now provides a high-quality native
implementation of `Promise`, so this library no longer incorporates a `Promise`
ponyfill, but instead configures fetch-ponyfill to use the native `Promise`
implementation. This library is no longer maintained and is not recommended
for new projects.

Use [fetch-ponyfill][2] directly, or consider [cross-fetch][4] instead.


## Install

```bash
npm install --save @softwareventures/fetch-ponyfill-preconfigured
```

or for yarn users:

```bash
yarn add @softwareventures/fetch-ponyfill-preconfigured
```


## Alternatives

 * [cross-fetch][4]
 * [fetch-ponyfill][2]
 * [isomorphic-fetch][5]


## Copyright

See [LICENSE.md](LICENSE.md) for copyright and licensing information
pertaining to this module.

fetch-ponyfill has its own separate copyright and licensing terms.
See the documentation for that module.


  [1]: https://ponyfill.com/
  [2]: https://www.npmjs.com/package/fetch-ponyfill
  [4]: https://www.npmjs.com/package/cross-fetch
  [5]: https://www.npmjs.com/package/isomorphic-fetch
