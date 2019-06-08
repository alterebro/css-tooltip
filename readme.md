# css-tooltip

> Only CSS lightweight and simple tooltips


## How to use it

Include the `css-tooltip` stylesheet minified file on the head of your document

```html
<head>
    ...
    <link rel="stylesheet" href="css-tooltip.min.css" />
    ...
</head>
```
Add the `data-tooltip` attribute to the element you want the tooltip in, the value of that attribute will be the text shown by the tooltip


```html
<a href="#" data-tooltip="Lorem ipsum dolor sit amet...">tootltip</a>
```


---


### Development

```sh
# ./src/css-tooltip.scss
$ npm run watch
$ npm run build
```
