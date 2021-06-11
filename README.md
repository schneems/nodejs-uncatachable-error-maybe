# Node.js Uncatchable error?

## Install

```
$ npm install
```

## Problem

I've got a very small program in `index.js`, it tries to make a connection to a url that does not exist and make a query to that connection. When that happens I want to catch the error and handle it, but i'm getting an ENOTFOUND raised and it force exits my program no matter what.

## Actual

```
$ node index.js
/Users/rschneeman/Documents/projects/work/nodejs-uncatachable-error-maybe/node_modules/node-fetch/lib/index.js:1461
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
             ^
FetchError: request to http://thisdoesnotexistalsdkfjalsdkfjasdlkfjasdlkfjalsdkfja.com/services/data/v51.0/query?q=SELECT%20foo%20from%20bar failed, reason: getaddrinfo ENOTFOUND thisdoesnotexistalsdkfjalsdkfjasdlkfjasdlkfjalsdkfja.com
    at ClientRequest.<anonymous> (/Users/rschneeman/Documents/projects/work/nodejs-uncatachable-error-maybe/node_modules/node-fetch/lib/index.js:1461:11)
    at ClientRequest.emit (node:events:369:20)
    at Socket.socketErrorListener (node:_http_client:462:9)
    at Socket.emit (node:events:369:20)
    at emitErrorNT (node:internal/streams/destroy:188:8)
    at emitErrorCloseNT (node:internal/streams/destroy:153:3)
    at processTicksAndRejections (node:internal/process/task_queues:81:21) {
  type: 'system',
  errno: 'ENOTFOUND',
  code: 'ENOTFOUND'
}
```

## Expected

```
$ node index.js
======================== lol
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
(logged but doesn't force exit the process)
```
