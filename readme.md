> Find closest hyperlink in DOM element

## Install

```
$ npm install --save closest-link
```

## Usage

```html
<article>
  <a href="https://ashiknesin.com">Here is link
    <span id="outer-span">Here is outer-span
      <span id="inner-span">Here is inner-span</span>
    </span>
  </a>
</article>
```

```js
const closestLink = require('closest-link');
const targetElement = document.querySelector('#inner-span')
closestLink(targetElement);
//=> '<a href="https://ashiknesin.com">...</a>'
```

## License

MIT © [Ashik Nesin](https://ashiknesin.com)
