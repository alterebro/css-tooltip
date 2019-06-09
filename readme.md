<p align="center">
    <img src="docs/css-tooltip.png"><br>
</p>

------

# css-tooltip

> Only CSS lightweight, minimal and simple tooltips


## Install

```sh
$ npm i css-tooltip
```

css-tooltip can also be directly included from [unpkg.com](https://unpkg.com//css-tooltip):

```html
<link rel="stylesheet" src="https://unpkg.com/css-tooltip" />
```

## Usage

Include the `css-tooltip` minified stylesheet file on the head of your document.

```html
<head>
    ...
    <link rel="stylesheet" href="/path/to/css-tooltip.min.css" />
</head>
```
Add the `data-tooltip` attribute to the element you want the tooltip in. The value of that attribute will be the text shown by the tooltip

```html
<a href="#" data-tooltip="Lorem ipsum dolor sit amet...">tootltip</a>
```

## Styles

There are some available classes to apply different styling to the tooltip

- `tooltip-multiline` : Creates a multiline tooltip

Positioning :

- `tooltip-bottom` : Places the tooltip at the bottom (centered)
- `tooltip-bottom-right` : Places the tooltip at the bottom right.
- `tooltip-bottom-left` : Places the tooltip at the bottom left.
- `tooltip-top-right` : Places the tooltip at the top right.
- `tooltip-top-left` : Places the tooltip at the top left.

*There's no `tooltip-top` class as it is the default styling for the tooltip*

### Example:

A multiline tooltip located on the bottom left :

```html
<a href="#" class="tooltip-multiline tooltip-bottom-left" data-tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a venenatis massa.">tootltip</a>
```

## Customize

You can customize the output of the tooltip by tweaking the source file variables `src/css-tooltip.scss` (self explanatory names)

```scss
$background-color   : #333;
$foreground-color   : #eee;
$arrow-size         : 8px;
$vertical-shift     : 12px;
$multiline-width    : 240px;
$tooltip-padding    : 8px 12px;
$roundness          : 3px; // 0 || border-radius
$shadow             : 0 5px 15px -5px rgba(0, 0, 0, .65); // 0 || box-shadow
$load-styles        : true !default; // false to remove the extra styles.
```


## Development

```sh
# ./src/css-tooltip.scss
$ npm run watch
$ npm run build
```

## License

ISC &copy; Jorge Moreno *&mdash; [@alterebro](https://twitter.com/alterebro)*
