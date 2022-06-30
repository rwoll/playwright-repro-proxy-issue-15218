Playwright Proxy Repro for https://github.com/microsoft/playwright/issues/15218
==============================================================

## Instructions

In one terminal run the proxy:

```
$ docker run --rm -ti -p 9090:8080 mitmproxy/mitmproxy
```

In the other, run the tests:

```
$ npx playwright test --repeat-each 10
```
