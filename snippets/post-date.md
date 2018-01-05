# About

Date of the post.


## Usage

```html
<b:loop values='data:posts' var='post'>
  [snippet]
</b:loop>
```


## Snippet

### Default (published)

```html
<time class='date-class-name' expr:datetime='data:post.date.iso8601' expr:title='data:post.date.iso8601'>
  <data:post.date/>
</time>
```

##### + Custom format

```html
<time class='date-class-name' expr:datetime='data:post.date.iso8601' expr:title='data:post.date.iso8601'>
  <b:eval expr='format(data:post.date, "dd/MM/YYYY")'/>
</time>
```

### Last updated

```html
<time class='date-class-name' expr:datetime='data:post.lastUpdated.iso8601' expr:title='data:post.lastUpdated.iso8601'>
  <data:post.lastUpdated/>
</time>
```

##### + Custom format

```html
<time class='date-class-name' expr:datetime='data:post.lastUpdated.iso8601' expr:title='data:post.lastUpdated.iso8601'>
  <b:eval expr='format(data:post.lastUpdated, "dd/MM/YYYY")'/>
</time>
```


## Custom format

<https://gist.github.com/igoynawamreh/5ec22895459a359cb44f8db4a82703e6#file-date-custom-format-md>
