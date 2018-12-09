<!--
@@@title:CSS@@@
@@@description:Put XML file and its CSS file together.@@@
@@@section:XML@@@
@@@subsection:None@@@
-->

# CSS

You can create CSS files in `src/_xml` folder (put XML file and its CSS together). The CSS will be automatically concatenated and compiled into `src/tmp/css/xml-css.css`, the CSS is also minified.


## Examples

```plaintext
[root project directory]
└── src/
    └── _xml/
        ├── folder-1/
        │   ├── component-1.css
        │   ├── component-1.xml
        │   ├── component-2.css
        │   └── component-2.xml
        └── folder-2/
            ├── component-1.css
            ├── component-1.xml
            ├── component-2.css
            └── component-2.xml
```

The CSS in `folder-1/*.css` and `folder-2/*.css` will be available in the `src/tmp/css/xml-css.css`.
