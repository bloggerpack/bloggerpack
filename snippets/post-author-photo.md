# About

Photo of the profile of the post author.


## Usage

```html
<b:loop values='data:posts' var='post'>
  [snippet]
</b:loop>
```

##### Options

- `128` - size
- `1:1` - aspect ratio
- `128x128`
  - width = size, height = (size * ratio height) / ratio width
  - width = 128, height = (128 * 1) / 1


## Snippet

### Default

```html
<b:if cond='data:post.author and data:post.author.authorPhoto'>
  <!-- wrapper (if needed) --><div class='wrapper-class-name'>
    <b:if cond='data:post.author.authorPhoto.image.isYoutube'>
      <img b:whitespace='remove'>
        <b:class name='img-class-name'/>
        <b:attr expr:value='data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl, 128, "1:1") : data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl' name='src'/>
        <b:attr expr:value='data:post.author.name' name='alt'/>
      </img>
    <b:else/>
      <img b:whitespace='remove'>
        <b:class name='img-class-name'/>
        <b:attr expr:value='data:post.author.authorPhoto.image.isResizable ? resizeImage(data:post.author.authorPhoto.image, 128, "1:1") : data:post.author.authorPhoto.image' name='src'/>
        <b:attr expr:value='data:post.author.name' name='alt'/>
      </img>
    </b:if>
  <!-- /wrapper (if needed) --></div>
</b:if>
```

### Fallback images

```html
<!-- wrapper (if needed) --><div class='wrapper-class-name'>
  <b:if cond='data:post.author and data:post.author.authorPhoto'>
    <b:if cond='data:post.author.authorPhoto.image.isYoutube'>
      <img b:whitespace='remove'>
        <b:class name='img-class-name'/>
        <b:attr expr:value='data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl, 128, "1:1") : data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl' name='src'/>
        <b:attr expr:value='data:post.author.name' name='alt'/>
      </img>
    <b:else/>
      <img b:whitespace='remove'>
        <b:class name='img-class-name'/>
        <b:attr expr:value='data:post.author.authorPhoto.image.isResizable ? resizeImage(data:post.author.authorPhoto.image, 128, "1:1") : data:post.author.authorPhoto.image' name='src'/>
        <b:attr expr:value='data:post.author.name' name='alt'/>
      </img>
    </b:if>
  <b:else/><!-- fallback -->
    <img b:whitespace='remove'>
      <b:class name='img-class-name no-img-class-name'/>
      <b:attr name='src' value='https://placehold.it/128x128/777/eee?text=No+Image'/>
      <b:attr expr:value='data:messages.image' name='alt'/>
    </img>
  </b:if>
<!-- /wrapper (if needed) --></div>
```

### Anchors

```html
<b:if cond='data:post.author and data:post.author.authorPhoto'>
  <!-- wrapper (if needed) --><div class='wrapper-class-name'>
    <b:if cond='data:post.author.authorPhoto.image.isYoutube'>
      <b:tag cond='data:post.author.profileUrl' expr:href='data:post.author.profileUrl' name='a'>
        <img b:whitespace='remove'>
          <b:class name='img-class-name'/>
          <b:attr expr:value='data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl, 128, "1:1") : data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl' name='src'/>
          <b:attr expr:value='data:post.author.name' name='alt'/>
        </img>
      </b:tag>
    <b:else/>
      <b:tag cond='data:post.author.profileUrl' expr:href='data:post.author.profileUrl' name='a'>
        <img b:whitespace='remove'>
          <b:class name='img-class-name'/>
          <b:attr expr:value='data:post.author.authorPhoto.image.isResizable ? resizeImage(data:post.author.authorPhoto.image, 128, "1:1") : data:post.author.authorPhoto.image' name='src'/>
          <b:attr expr:value='data:post.author.name' name='alt'/>
        </img>
      </b:tag>
    </b:if>
  <!-- /wrapper (if needed) --></div>
</b:if>
```

##### + Fallback images

```html
<!-- wrapper (if needed) --><div class='wrapper-class-name'>
  <b:if cond='data:post.author and data:post.author.authorPhoto'>
    <b:if cond='data:post.author.authorPhoto.image.isYoutube'>
      <b:tag cond='data:post.author.profileUrl' expr:href='data:post.author.profileUrl' name='a'>
        <img b:whitespace='remove'>
          <b:class name='img-class-name'/>
          <b:attr expr:value='data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl, 128, "1:1") : data:post.author.authorPhoto.image.youtubeMaxResDefaultUrl' name='src'/>
          <b:attr expr:value='data:post.author.name' name='alt'/>
        </img>
      </b:tag>
    <b:else/>
      <b:tag cond='data:post.author.profileUrl' expr:href='data:post.author.profileUrl' name='a'>
        <img b:whitespace='remove'>
          <b:class name='img-class-name'/>
          <b:attr expr:value='data:post.author.authorPhoto.image.isResizable ? resizeImage(data:post.author.authorPhoto.image, 128, "1:1") : data:post.author.authorPhoto.image' name='src'/>
          <b:attr expr:value='data:post.author.name' name='alt'/>
        </img>
      </b:tag>
    </b:if>
  <b:else/><!-- fallback -->
    <img b:whitespace='remove'>
      <b:class name='img-class-name no-img-class-name'/>
      <b:attr name='src' value='https://placehold.it/128x128/777/eee?text=No+Image'/>
      <b:attr expr:value='data:messages.image' name='alt'/>
    </img>
  </b:if>
<!-- /wrapper (if needed) --></div>
```
