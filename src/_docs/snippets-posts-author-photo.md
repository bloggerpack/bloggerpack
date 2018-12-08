<!--
@@@title:Author photo@@@
@@@description:Photo of the profile of the post author.@@@
@@@section:Snippets@@@
@@@subsection:Posts@@@
-->

# Author photo

Photo of the profile of the post author.

**Options**

- `128` - size
- `1:1` - aspect ratio
- `128x128`
  - width = size
  - height = (size * ratio height) / ratio width
    - width = `128`
    - height = (`128` * `1`) / `1` = `128`


## Default

```html
<!-- Author photo -->
<b:if cond='data:post.author and data:post.author.authorPhoto'>
  <b:if cond='data:post.author.authorPhoto.image.isYoutube'>
    <img>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr expr:value='data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl, 128, "1:1") : data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl' name='src'/>
      <!-- alt --><b:attr expr:value='data:post.author.name' name='alt'/>
      <b:attr name='b:whitespace' value='remove'/>
    </img>
  <b:else/>
    <img>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr expr:value='data:post.author.authorPhoto.image.isResizable ? resizeImage(data:post.author.authorPhoto.image, 128, "1:1") : data:post.author.authorPhoto.image' name='src'/>
      <!-- alt --><b:attr expr:value='data:post.author.name' name='alt'/>
      <b:attr name='b:whitespace' value='remove'/>
    </img>
  </b:if>
</b:if>
```


## Fallback

```html
<!-- Author photo -->
<b:if cond='data:post.author and data:post.author.authorPhoto'>
  <b:if cond='data:post.author.authorPhoto.image.isYoutube'>
    <img>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr expr:value='data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl, 128, "1:1") : data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl' name='src'/>
      <!-- alt --><b:attr expr:value='data:post.author.name' name='alt'/>
      <b:attr name='b:whitespace' value='remove'/>
    </img>
  <b:else/>
    <img>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr expr:value='data:post.author.authorPhoto.image.isResizable ? resizeImage(data:post.author.authorPhoto.image, 128, "1:1") : data:post.author.authorPhoto.image' name='src'/>
      <!-- alt --><b:attr expr:value='data:post.author.name' name='alt'/>
      <b:attr name='b:whitespace' value='remove'/>
    </img>
  </b:if>
<b:else/><!-- fallback -->
  <img>
    <!-- class --><b:class name=''/>
    <!-- src --><b:attr name='src' value='https://via.placeholder.com/128x128/777/eee?text=No+Image'/>
    <!-- alt --><b:attr expr:value='data:messages.image' name='alt'/>
    <b:attr name='b:whitespace' value='remove'/>
  </img>
</b:if>
```


## Anchors

```html
<!-- Author photo -->
<b:if cond='data:post.author and data:post.author.authorPhoto'>
  <b:if cond='data:post.author.authorPhoto.image.isYoutube'>
    <b:tag cond='data:post.author.profileUrl' expr:href='data:post.author.profileUrl' name='a'>
      <b:attr cond='data:post.author.profileUrl' name='b:whitespace' value='remove'/>
      <img>
        <!-- class --><b:class name=''/>
        <!-- src --><b:attr expr:value='data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl, 128, "1:1") : data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl' name='src'/>
        <!-- alt --><b:attr expr:value='data:post.author.name' name='alt'/>
        <b:attr name='b:whitespace' value='remove'/>
      </img>
    </b:tag>
  <b:else/>
    <b:tag cond='data:post.author.profileUrl' expr:href='data:post.author.profileUrl' name='a'>
      <b:attr cond='data:post.author.profileUrl' name='b:whitespace' value='remove'/>
      <img>
        <!-- class --><b:class name=''/>
        <!-- src --><b:attr expr:value='data:post.author.authorPhoto.image.isResizable ? resizeImage(data:post.author.authorPhoto.image, 128, "1:1") : data:post.author.authorPhoto.image' name='src'/>
        <!-- alt --><b:attr expr:value='data:post.author.name' name='alt'/>
        <b:attr name='b:whitespace' value='remove'/>
      </img>
    </b:tag>
  </b:if>
</b:if>
```

**+ Fallback**

```html
<!-- Author photo -->
<b:if cond='data:post.author and data:post.author.authorPhoto'>
  <b:if cond='data:post.author.authorPhoto.image.isYoutube'>
    <b:tag cond='data:post.author.profileUrl' expr:href='data:post.author.profileUrl' name='a'>
      <b:attr cond='data:post.author.profileUrl' name='b:whitespace' value='remove'/>
      <img>
        <!-- class --><b:class name=''/>
        <!-- src --><b:attr expr:value='data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl, 128, "1:1") : data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl' name='src'/>
        <!-- alt --><b:attr expr:value='data:post.author.name' name='alt'/>
        <b:attr name='b:whitespace' value='remove'/>
      </img>
    </b:tag>
  <b:else/>
    <b:tag cond='data:post.author.profileUrl' expr:href='data:post.author.profileUrl' name='a'>
      <b:attr cond='data:post.author.profileUrl' name='b:whitespace' value='remove'/>
      <img>
        <!-- class --><b:class name=''/>
        <!-- src --><b:attr expr:value='data:post.author.authorPhoto.image.isResizable ? resizeImage(data:post.author.authorPhoto.image, 128, "1:1") : data:post.author.authorPhoto.image' name='src'/>
        <!-- alt --><b:attr expr:value='data:post.author.name' name='alt'/>
        <b:attr name='b:whitespace' value='remove'/>
      </img>
    </b:tag>
  </b:if>
<b:else/><!-- fallback -->
  <b:tag cond='data:post.author.profileUrl' expr:href='data:post.author.profileUrl' name='a'>
    <b:attr cond='data:post.author.profileUrl' name='b:whitespace' value='remove'/>
    <img>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr name='src' value='https://via.placeholder.com/128x128/777/eee?text=No+Image'/>
      <!-- alt --><b:attr expr:value='data:messages.image' name='alt'/>
      <b:attr name='b:whitespace' value='remove'/>
    </img>
  </b:tag>
</b:if>
```
