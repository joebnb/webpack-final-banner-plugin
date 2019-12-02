# webpack-final-banner-plugin
> Add raw banner into entry at final step.


## Getting started

install module:

```shell
npm i webpack-final-banner-plugin
```

use in webpack.config.js:
```js
const FinalBannerPlugin = require('./webpack-final-banner-plugin');

const bannerOption = {
  banner:'your custom banner or some executeable code'
}

// add in plugins
...
plugins: [
        new FinalBannerPlugin(bannerOption)
    ],
...
```

## Fill with your own text at the entry file

The default banner plugin can't add double slash comments like `'// some comment'`,as result it returns:
```js
/*
*
* // some comment
* 
*/
```
it can't be use in some scipt metadata such as Greasemonkey.but this plugin can done with double-slash.

