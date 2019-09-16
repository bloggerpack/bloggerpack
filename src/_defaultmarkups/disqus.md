# Disqus

## Usage

### Disqus config

Included by default in `src/theme.xml`.

```xml
<b:include data='{ shortname: "replace_with_disqus_shortname" }' name='disqusConfig'/>
```

### Disqus thread

Included by default in `src/_views/main-content.part/main/widget_Blog1.part/comments.xml`.

#### Expression

You can replace `data:post.url` with `data:view.url.canonical`.

```xml
<b:with value='data:post.url' var='pageUrl'>
<b:with value='data:post.id' var='pageIdentifier'>
  <b:include name='disqusThread'/>
</b:with>
</b:with>
```

#### String

```xml
<b:with value='"https://example.com"' var='pageUrl'>
<b:with value='"12345"' var='pageIdentifier'>
  <b:include name='disqusThread'/>
</b:with>
</b:with>
```

### Disqus count.js

Included by default in `src/theme.xml`.

```xml
<b:include name='disqusCountJs'/>
```
