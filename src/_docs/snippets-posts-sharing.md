<!--
@@@title:Posts sharing@@@
@@@description:The share buttons for the post.@@@
@@@section:Snippets@@@
-->

# Posts sharing

The share buttons for the post.


## Default

```html
<!-- Sharing -->
<a b:whitespace='remove' expr:href='params(data:post.shareUrl, { target: "twitter" })' target='_blank'>
  <i aria-hidden='true' class='icon icon-twitter'/>
  Twitter
</a>
<a b:whitespace='remove' expr:href='params(data:post.shareUrl, { target: "facebook" })' target='_blank'>
  <i aria-hidden='true' class='icon icon-facebook'/>
  Facebook
</a>
<a b:whitespace='remove' expr:href='params(data:post.shareUrl, { target: "googlePlus" })' target='_blank'>
  <i aria-hidden='true' class='icon icon-gplus'/>
  Google+
</a>
<a b:whitespace='remove' expr:href='params(data:post.shareUrl, { target: "pinterest" })' target='_blank'>
  <i aria-hidden='true' class='icon icon-pinterest'/>
  Pinterest
</a>
<a b:whitespace='remove' expr:href='params(data:post.shareUrl, { target: "email" })' target='_blank'>
  <i aria-hidden='true' class='icon icon-email'/>
  Email
</a>
<a b:whitespace='remove' expr:href='params(data:post.shareUrl, { target: "blog" })' target='_blank'>
  <i aria-hidden='true' class='icon icon-blogger'/>
  BlogThis!
</a>
```


## Dropdown example

```html
<!-- Sharing -->
<div class='dropdown'>
  <a aria-expanded='false' aria-haspopup='true' b:whitespace='remove' class='dropdown-toggle' data-toggle='dropdown' expr:title='data:messages.share' href='#'>
    <i aria-hidden='true' class='icon icon-share'/>
    <data:messages.share/>
  </a>
  <div class='dropdown-menu'>
    <a b:whitespace='remove' class='dropdown-item' expr:href='params(data:post.shareUrl, { target: "twitter" })' target='_blank'>
      <i aria-hidden='true' class='icon icon-twitter'/>
      Twitter
    </a>
    <a b:whitespace='remove' class='dropdown-item' expr:href='params(data:post.shareUrl, { target: "facebook" })' target='_blank'>
      <i aria-hidden='true' class='icon icon-facebook'/>
      Facebook
    </a>
    <a b:whitespace='remove' class='dropdown-item' expr:href='params(data:post.shareUrl, { target: "googlePlus" })' target='_blank'>
      <i aria-hidden='true' class='icon icon-gplus'/>
      Google+
    </a>
    <a b:whitespace='remove' class='dropdown-item' expr:href='params(data:post.shareUrl, { target: "pinterest" })' target='_blank'>
      <i aria-hidden='true' class='icon icon-pinterest'/>
      Pinterest
    </a>
    <a b:whitespace='remove' class='dropdown-item' expr:href='params(data:post.shareUrl, { target: "email" })' target='_blank'>
      <i aria-hidden='true' class='icon icon-email'/>
      Email
    </a>
    <a b:whitespace='remove' class='dropdown-item' expr:href='params(data:post.shareUrl, { target: "blog" })' target='_blank'>
      <i aria-hidden='true' class='icon icon-blogger'/>
      BlogThis!
    </a>
  </div>
</div>
```
