<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# deepHasProp

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test whether an object contains a nested key path, either own or inherited.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-deep-has-property
```

</section>

<section class="usage">

## Usage

```javascript
var deepHasProp = require( '@stdlib/assert-deep-has-property' );
```

#### deepHasProp( value, path\[, options] )

Returns a `boolean` indicating if a `value` has a specified `path`, either own or inherited.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
function Foo() {
    return this;
}
Foo.prototype.b = {
    'c': 'd'
};

var obj = { 'a': new Foo() };

var bool = deepHasProp( obj, 'a.b.c' );
// returns true

bool = deepHasProp( obj, 'a.b.c.d.e' );
// returns false
```

If a key path includes an `array`, specify the numeric index.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var arr = [
    {
        'a': [
            {
                'b': [
                    { 'c': 'd' },
                    { 'e': 'f' }
                ]
            }
        ]
    }
];

var bool = deepHasProp( arr, '0.a.0.b.0.c' );
// returns true

bool = deepHasProp( arr, '0.a.1.b.0.c' );
// returns false

bool = deepHasProp( arr, '0.a.0.b.1.c' );
// returns false
```

The key path may be specified as either a delimited `string` or a key `array`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepHasProp( obj, [ 'a', 'b', 'c' ] );
// returns true
```

The function accepts the following `options`:

-   **sep**: key path separator. Default: `'.'`.

By default, the function assumes `.` separated key values. To specify an alternative separator, set the `sep` option.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepHasProp( obj, 'a/b/c', {
    'sep': '/'
});
// returns true
```

#### deepHasProp.factory( path\[, options] )

Returns a `function` which tests whether a `value` contains a nested key `path`, either own or inherited.

```javascript
var has = deepHasProp.factory( 'a/b/c', {
    'sep': '/'
});
```

#### has( value )

Returns a `boolean` indicating whether a `value` contains a nested key `path`, either own or inherited.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var has = deepHasProp.factory( 'a.b.c' );

function Foo() {
    return this;
}
Foo.prototype.b = {
    'c': 'd'
};

var obj = { 'a': new Foo() };

var bool = has( obj );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When provided `null` or `undefined`, the function result is always `false`.

    ```javascript
    var bool = deepHasProp( null, 'a.b.c' );
    // returns false

    bool = deepHasProp( void 0, 'a.b.c' );
    // returns false
    ```

-   Property values other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var obj = {
        'a': 'b'
    };

    var bool = deepHasProp( obj, 'a.length' );
    // returns true
    ```

-   Key path `array` elements are coerced to `strings`.

    ```javascript
    var obj = {
        'null': false
    };
    var bool = deepHasProp( obj, [ null ] );
    // returns true

    obj = {
        '[object Object]': false
    };
    bool = deepHasProp( obj, [ {} ] );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

<!-- eslint no-undef: "error" -->

```javascript
var deepHasProp = require( '@stdlib/assert-deep-has-property' );

var bool;
var has;

bool = deepHasProp( { 'a': { 'b': { 'c': 'd' } } }, 'a.b.c' );
// returns true

bool = deepHasProp( { 'a': { 'b': { 'c': 'd' } } }, [ 'a', 'b', 'hasOwnProperty' ] );
// returns true

bool = deepHasProp( { 'a': { 'b': { 'c': 'd' } } }, 'a/b/c', {
    'sep': '/'
});
// returns true

bool = deepHasProp( { 'a': { 'b': { 'c': 'd' } } }, 'a.b.c.d' );
// returns false

bool = deepHasProp( { 'a': [ { 'b': { 'c': 'd' } } ] }, [ 'a', '0', 'b', 'c', 'd' ] );
// returns false

bool = deepHasProp( { 'a': { 'b': { 'c': 'd' } } }, 'a/b/c/d/e', {
    'sep': '/'
});
// returns false

// Create a customized function:
has = deepHasProp.factory( 'a_b_c', {
    'sep': '_'
});

bool = has( { 'a': { 'b': { 'c': 'd' } } } );
// returns true

bool = has( { 'a': [ { 'b': { 'c': 'd' } } ] } );
// returns false
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-deep-has-property.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-deep-has-property

[test-image]: https://github.com/stdlib-js/assert-deep-has-property/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-deep-has-property/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-deep-has-property/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-deep-has-property?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-deep-has-property.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-deep-has-property/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-deep-has-property/main/LICENSE

</section>

<!-- /.links -->
