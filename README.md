![Moyo](/dist/svgs/yinyang.svg)![Moyo](/dist/svgs/seigaiha.svg)

# Moyo

Moyō 模様 (pattern) is a collection of patterns I use for my projects.

## Demo

See the demo of all patterns on my [website](https://thomasorus.com/moyo.html).

## SVG version

Moyo in SVG comes as a single SVG file containing all the patterns. If you are not familiar with SVG, an SVG file can use a `<defs>` tag to store graphical objects that you will use later. Each pattern is defined inside the `<pattern>` tag and each one has an `id` attribute. Those ids can then be used inside other SVGs.

### How to use

Copy paste the `dist/moyo.svg` file content inside your template and generate the desired SVG with the desired pattern.

For example this SVG will be be a rectangle (`<rect>` tag) of 100 pixels width and height and will use the `checks` pattern.

```xml
 <svg height="100" width="100">
    <rect style="fill: url(#checks);" height="100" width="100"></rect>
</svg>
```

Colors are automatically defined by two CSS rules: the color value of the text (aka currentColor) and the background value on the div containing them (if none, the <body>).

Two patterns (seigaiha and yinyang) default to a white background, which can be changed by using a css custom property.

```css
#seigaiha, #yinyang {
    --background: red;
}
```


## CSS Version

The CSS version is deprecated, and uses the SVGs as base64 background images. Include the classname to your existing html element and the pattern should appear. Please note that since this is a base64 encoding, you cannot change the colors when using the CSS version.

## License

Moyō 模様 is free to use by individuals and organizations that do not operate by capitalist principles. For more information see the license file.
