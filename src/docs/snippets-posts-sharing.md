<!--
@@@title:Posts sharing@@@
@@@section:Snippets@@@
-->

# Posts sharing

The share buttons for the post.

##### Usage

```html
<b:loop values='data:posts' var='post'>
  ...
</b:loop>
```


## Default

```html
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
<div class='dropdown'>
  <a aria-expanded='false' aria-haspopup='true' b:whitespace='remove' class='dropdown-toggle' data-toggle='dropdown' expr:id='"DropdownMenuSharing_" + data:widget.instanceId + "_" + data:post.id' expr:title='data:messages.share' href='#'>
    <i aria-hidden='true' class='icon icon-share'/>
    <data:messages.share/>
  </a>
  <div class='dropdown-menu' expr:aria-labelledby='"DropdownMenuSharing_" + data:widget.instanceId + "_" + data:post.id'>
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
