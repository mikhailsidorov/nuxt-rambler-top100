# Nuxt Rambler Top-100

This plugin automatically sends first page and route change events to Rambler Top-100.

**Note:** module is not enabled in dev mode.
You can set environment variable `NODE_ENV` to `production` for testing in dev mode.

## Setup

`npm install --save nuxt-rambler-top100`

Add `nuxt-rambler-top100` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    [
      'nuxt-rambler-top100',
      {
        // Project ID. Required parameter.
        id: 'XXXXXX',

        // Data attributes. Optional parameter.
        attributesDataset: ['attribute1', 'attribute2']
      }
    ]
  ]
}
```

For more information please read the documentation:

- [Rambler Top-100 documetation](https://doc.top100.rambler.ru/)
