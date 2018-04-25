# Post labels

Labels of the post.


## Usage

```html
<b:loop values='data:posts' var='post'>
  [snippet]
</b:loop>
```

##### Options

- `12` - maximum number of posts in label page


## Snippet

### Default

```html
<b:if cond='data:post.labels'>
  <b:loop index='i' values='data:post.labels' var='label'>
    <a b:whitespace='remove' expr:href='params(data:label.url, { max-results: "12" })' expr:title='data:label.name'>
      <data:label.name/>
    </a>
  </b:loop>
<b:else/><!-- unlabelled -->
  <span>Unlabelled</span>
</b:if>
```

### Comma

```html
<b:if cond='data:post.labels'>
  <b:loop index='i' values='data:post.labels' var='label'>
    <a b:whitespace='remove' expr:href='params(data:label.url, { max-results: "12" })' expr:title='data:label.name'>
      <data:label.name/>
    </a><b:if cond='data:i != (data:post.labels.size - 1)'>,</b:if>
  </b:loop>
<b:else/><!-- unlabelled -->
  <span>Unlabelled</span>
</b:if>
```
