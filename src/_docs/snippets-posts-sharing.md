<!--
@@@title:Sharing@@@
@@@description:The share buttons for the post.@@@
@@@section:Snippets@@@
@@@subsection:Posts@@@
-->

# Sharing

The share buttons for the post.


## Default

```html
<!-- Sharing -->
<a expr:href='params(data:post.shareUrl, { target: "twitter" })' target='_blank'>
  <b:attr name='b:whitespace' value='remove'/>
  Twitter
</a>
<a expr:href='params(data:post.shareUrl, { target: "facebook" })' target='_blank'>
  <b:attr name='b:whitespace' value='remove'/>
  Facebook
</a>
<a expr:href='params(data:post.shareUrl, { target: "googlePlus" })' target='_blank'>
  <b:attr name='b:whitespace' value='remove'/>
  Google+
</a>
<a expr:href='params(data:post.shareUrl, { target: "pinterest" })' target='_blank'>
  <b:attr name='b:whitespace' value='remove'/>
  Pinterest
</a>
<a expr:href='params(data:post.shareUrl, { target: "email" })' target='_blank'>
  <b:attr name='b:whitespace' value='remove'/>
  Email
</a>
<a expr:href='params(data:post.shareUrl, { target: "blog" })' target='_blank'>
  <b:attr name='b:whitespace' value='remove'/>
  BlogThis!
</a>
```


## Dropdown example

```html
<!-- Sharing -->
<div class='dropdown'>
  <a aria-expanded='false' aria-haspopup='true' class='dropdown-toggle' data-toggle='dropdown' expr:title='data:messages.share' href='#'>
    <b:attr name='b:whitespace' value='remove'/>
    <data:messages.share/>
  </a>
  <div class='dropdown-menu'>
    <a class='dropdown-item' expr:href='params(data:post.shareUrl, { target: "twitter" })' target='_blank'>
      <b:attr name='b:whitespace' value='remove'/>
      Twitter
    </a>
    <a class='dropdown-item' expr:href='params(data:post.shareUrl, { target: "facebook" })' target='_blank'>
      <b:attr name='b:whitespace' value='remove'/>
      Facebook
    </a>
    <a class='dropdown-item' expr:href='params(data:post.shareUrl, { target: "googlePlus" })' target='_blank'>
      <b:attr name='b:whitespace' value='remove'/>
      Google+
    </a>
    <a class='dropdown-item' expr:href='params(data:post.shareUrl, { target: "pinterest" })' target='_blank'>
      <b:attr name='b:whitespace' value='remove'/>
      Pinterest
    </a>
    <a class='dropdown-item' expr:href='params(data:post.shareUrl, { target: "email" })' target='_blank'>
      <b:attr name='b:whitespace' value='remove'/>
      Email
    </a>
    <a class='dropdown-item' expr:href='params(data:post.shareUrl, { target: "blog" })' target='_blank'>
      <b:attr name='b:whitespace' value='remove'/>
      BlogThis!
    </a>
  </div>
</div>
```
