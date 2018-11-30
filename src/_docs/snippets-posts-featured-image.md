<!--
@@@title:Featured image@@@
@@@description:The featured image for the post.@@@
@@@section:Snippets@@@
-->

# Featured image

The featured image for the post.

**Options**

- `512` - size
- `16:9` - aspect ratio
- `512x288`
  - width = size
  - height = (size * ratio height) / ratio width
    - width = `512`
    - height = (`512` * `9`) / `16` = `288`


## Default

```html
<!-- Featured image -->
<b:if cond='data:post.featuredImage'>
  <b:if cond='data:post.featuredImage.isYoutube'>
    <img b:whitespace='remove'>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr expr:value='data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, 512, "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl' name='src'/>
      <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
    </img>
  <b:else/>
    <img b:whitespace='remove'>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr expr:value='data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, 512, "16:9") : data:post.featuredImage' name='src'/>
      <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
    </img>
  </b:if>
</b:if>
```


## Fallback

```html
<!-- Featured image -->
<b:if cond='data:post.featuredImage'>
  <b:if cond='data:post.featuredImage.isYoutube'>
    <img b:whitespace='remove'>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr expr:value='data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, 512, "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl' name='src'/>
      <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
    </img>
  <b:else/>
    <img b:whitespace='remove'>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr expr:value='data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, 512, "16:9") : data:post.featuredImage' name='src'/>
      <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
    </img>
  </b:if>
<b:else/><!-- fallback -->
  <img b:whitespace='remove'>
    <!-- class --><b:class name=''/>
    <!-- src --><b:attr name='src' value='https://via.placeholder.com/512x288/777/eee?text=No+Image'/>
    <!-- alt --><b:attr expr:value='data:messages.image' name='alt'/>
  </img>
</b:if>
```


## Responsive images

```html
<!-- Featured image -->
<b:if cond='data:post.featuredImage'>
  <b:if cond='data:post.featuredImage.isYoutube'>
    <img b:whitespace='remove'>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr expr:value='data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, 512, "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl' name='src'/>
      <!-- srcset --><b:attr expr:value='data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, [200,400,800,1200,1600], "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl' name='srcset'/>
      <!-- sizes --><b:attr name='sizes' value='100vw'/>
      <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
    </img>
  <b:else/>
    <img b:whitespace='remove'>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr expr:value='data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, 512, "16:9") : data:post.featuredImage' name='src'/>
      <!-- srcset --><b:attr expr:value='data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, [200,400,800,1200,1600], "16:9") : data:post.featuredImage' name='srcset'/>
      <!-- sizes --><b:attr name='sizes' value='100vw'/>
      <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
    </img>
  </b:if>
</b:if>
```

**+ Fallback**

```html
<!-- Featured image -->
<b:if cond='data:post.featuredImage'>
  <b:if cond='data:post.featuredImage.isYoutube'>
    <img b:whitespace='remove'>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr expr:value='data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, 512, "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl' name='src'/>
      <!-- srcset --><b:attr expr:value='data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, [200,400,800,1200,1600], "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl' name='srcset'/>
      <!-- sizes --><b:attr name='sizes' value='100vw'/>
      <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
    </img>
  <b:else/>
    <img b:whitespace='remove'>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr expr:value='data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, 512, "16:9") : data:post.featuredImage' name='src'/>
      <!-- srcset --><b:attr expr:value='data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, [200,400,800,1200,1600], "16:9") : data:post.featuredImage' name='srcset'/>
      <!-- sizes --><b:attr name='sizes' value='100vw'/>
      <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
    </img>
  </b:if>
<b:else/><!-- fallback -->
  <img b:whitespace='remove'>
    <!-- class --><b:class name=''/>
    <!-- src --><b:attr name='src' value='https://via.placeholder.com/512x288/777/eee?text=No+Image'/>
    <!-- alt --><b:attr expr:value='data:messages.image' name='alt'/>
  </img>
</b:if>
```


## Anchors

```html
<!-- Featured image -->
<b:if cond='data:post.featuredImage'>
  <b:if cond='data:post.featuredImage.isYoutube'>
    <a expr:href='data:post.link ?: data:post.url'>
      <img b:whitespace='remove'>
        <!-- class --><b:class name=''/>
        <!-- src --><b:attr expr:value='data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, 512, "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl' name='src'/>
        <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
      </img>
    </a>
  <b:else/>
    <a expr:href='data:post.link ?: data:post.url'>
      <img b:whitespace='remove'>
        <!-- class --><b:class name=''/>
        <!-- src --><b:attr expr:value='data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, 512, "16:9") : data:post.featuredImage' name='src'/>
        <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
      </img>
    </a>
  </b:if>
</b:if>
```

**+ Fallback**

```html
<!-- Featured image -->
<b:if cond='data:post.featuredImage'>
  <b:if cond='data:post.featuredImage.isYoutube'>
    <a expr:href='data:post.link ?: data:post.url'>
      <img b:whitespace='remove'>
        <!-- class --><b:class name=''/>
        <!-- src --><b:attr expr:value='data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, 512, "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl' name='src'/>
        <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
      </img>
    </a>
  <b:else/>
    <a expr:href='data:post.link ?: data:post.url'>
      <img b:whitespace='remove'>
        <!-- class --><b:class name=''/>
        <!-- src --><b:attr expr:value='data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, 512, "16:9") : data:post.featuredImage' name='src'/>
        <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
      </img>
    </a>
  </b:if>
<b:else/><!-- fallback -->
  <a expr:href='data:post.link ?: data:post.url'>
    <img b:whitespace='remove'>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr name='src' value='https://via.placeholder.com/512x288/777/eee?text=No+Image'/>
      <!-- alt --><b:attr expr:value='data:messages.image' name='alt'/>
    </img>
  </a>
</b:if>
```

**+ Responsive images**

```html
<!-- Featured image -->
<b:if cond='data:post.featuredImage'>
  <b:if cond='data:post.featuredImage.isYoutube'>
    <a expr:href='data:post.link ?: data:post.url'>
      <img b:whitespace='remove'>
        <!-- class --><b:class name=''/>
        <!-- src --><b:attr expr:value='data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, 512, "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl' name='src'/>
        <!-- srcset --><b:attr expr:value='data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, [200,400,800,1200,1600], "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl' name='srcset'/>
        <!-- sizes --><b:attr name='sizes' value='100vw'/>
        <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
      </img>
    </a>
  <b:else/>
    <a expr:href='data:post.link ?: data:post.url'>
      <img b:whitespace='remove'>
        <!-- class --><b:class name=''/>
        <!-- src --><b:attr expr:value='data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, 512, "16:9") : data:post.featuredImage' name='src'/>
        <!-- srcset --><b:attr expr:value='data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, [200,400,800,1200,1600], "16:9") : data:post.featuredImage' name='srcset'/>
        <!-- sizes --><b:attr name='sizes' value='100vw'/>
        <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
      </img>
    </a>
  </b:if>
</b:if>
```

**+ Responsive images** **+ Fallback**

```html
<!-- Featured image -->
<b:if cond='data:post.featuredImage'>
  <b:if cond='data:post.featuredImage.isYoutube'>
    <a expr:href='data:post.link ?: data:post.url'>
      <img b:whitespace='remove'>
        <!-- class --><b:class name=''/>
        <!-- src --><b:attr expr:value='data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, 512, "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl' name='src'/>
        <!-- srcset --><b:attr expr:value='data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, [200,400,800,1200,1600], "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl' name='srcset'/>
        <!-- sizes --><b:attr name='sizes' value='100vw'/>
        <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
      </img>
    </a>
  <b:else/>
    <a expr:href='data:post.link ?: data:post.url'>
      <img b:whitespace='remove'>
        <!-- class --><b:class name=''/>
        <!-- src --><b:attr expr:value='data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, 512, "16:9") : data:post.featuredImage' name='src'/>
        <!-- srcset --><b:attr expr:value='data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, [200,400,800,1200,1600], "16:9") : data:post.featuredImage' name='srcset'/>
        <!-- sizes --><b:attr name='sizes' value='100vw'/>
        <!-- alt --><b:attr expr:value='data:post.title ? data:post.title : data:messages.image' name='alt'/>
      </img>
    </a>
  </b:if>
<b:else/><!-- fallback -->
  <a expr:href='data:post.link ?: data:post.url'>
    <img b:whitespace='remove'>
      <!-- class --><b:class name=''/>
      <!-- src --><b:attr name='src' value='https://via.placeholder.com/512x288/777/eee?text=No+Image'/>
      <!-- alt --><b:attr expr:value='data:messages.image' name='alt'/>
    </img>
  </a>
</b:if>
```


## CSS background-image

```html
<!-- Featured image -->
<b:if cond='data:post.featuredImage'>
  <div class=''><!-- target -->
    <b:if cond='data:post.featuredImage.isYoutube'>
      <!-- style --><b:attr expr:value='"background-image: url(" + (data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, 512, "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl) + ");"' name='style'/>
    <b:else/>
      <!-- style --><b:attr expr:value='"background-image: url(" + (data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, 512, "16:9") : data:post.featuredImage) + ");"' name='style'/>
    </b:if>
  </div><!-- /target -->
</b:if>
```

**+ Fallback**

```html
<!-- Featured image -->
<div class=''><!-- target -->
  <b:if cond='data:post.featuredImage'>
    <b:if cond='data:post.featuredImage.isYoutube'>
      <!-- style --><b:attr expr:value='"background-image: url(" + (data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, 512, "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl) + ");"' name='style'/>
    <b:else/>
      <!-- style --><b:attr expr:value='"background-image: url(" + (data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, 512, "16:9") : data:post.featuredImage) + ");"' name='style'/>
    </b:if>
  <b:else/><!-- fallback -->
    <!-- class --><b:class name=''/>
    <!-- style --><b:attr name='style' value='background-image: url(https://via.placeholder.com/512x288/777/eee?text=No+Image);'/>
  </b:if>
</div><!-- /target -->
```
