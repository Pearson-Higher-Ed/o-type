# o-type [![Build Status](https://travis-ci.org/Pearson-Higher-Ed/o-type.svg?branch=master)](https://travis-ci.org/Pearson-Higher-Ed/o-type)

Typography.

## Quick start

Add `o-type` to the CSS modules list:

```
<link rel="stylesheet" href="https://origami.pearsoned.com/bundles/css?modules=o-type@^1" />
```

By default, base styles will be applied to the document and text elements. Refer to the [demos](https://origami.pearsoned.com/registry/components/o-type) for typographic markup examples.

## Advanced usage

### Font families

All font families are defined in the `$o-type-font-families` map. Use the `o-type-font-family` function to generate a font family with fallbacks:

```sass
.foo {
	font-family: o-type-font-family(sans-serif-default);
}
```

By default, the base font family is already defined for the document element.

### Functions

#### o-type-font-family($family)

Returns a `font-family` value with fallbacks.

- `$family`: The font family identifier. Possible values are: `sans-serif-default`.

### Opting out of styles for default elements

This component provides default styles for the `html` and other elements, such as `label` and `p` elements. In most cases, you should use the defaults and not override these styles. However, if you need to disable them, you may set `$o-type-scaffold` to `false` and use the class selectors directly:

```html
<label class="o-type__label">Foo</label>
<p class="o-type__copy">
	Excepteur sint occaecat cupidatat non proident.
</p>
```

## License

This software is published by Pearson Education under the [MIT license](LICENSE).
