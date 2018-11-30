<!--
@@@title:Page types@@@
@@@description:Conditional tags for different page types, which allows you to specify a part of your template code on specific types of pages or specific URLs.@@@
@@@section:Snippets@@@
-->

# Page types

Conditional tags for different page types, which allows you to specify a part of your template code on specific types of pages or specific URLs.


## Basic

```html
<b:comment>=== Homepage ===</b:comment>
<b:if cond='data:view.isHomepage'>
  <!-- https://example.blogspot.com -->
</b:if>
<b:comment>=== Item page ===</b:comment>
<b:if cond='data:view.isPost'>
  <!-- https://example.blogspot.com/<year>/<month>/<permalink>.html -->
</b:if>
<b:comment>=== Static page ===</b:comment>
<b:if cond='data:view.isPage'>
  <!-- https://example.blogspot.com/p/<permalink>.html -->
</b:if>
<b:comment>=== Search (label) page ===</b:comment>
<b:if cond='data:view.search.label'>
  <!-- 1. https://example.blogspot.com/search/label/<name> -->
  <!-- 2. https://example.blogspot.com/search?label=<name> -->
</b:if>
<b:comment>=== Search (query) page ===</b:comment>
<b:if cond='data:view.search.query'>
  <!-- https://example.blogspot.com/search?q=<query> -->
</b:if>
<b:comment>=== Search (default) page ===</b:comment>
<b:if cond='data:view.search and !data:view.search.label and !data:view.search.query'>
  <!-- https://example.blogspot.com/search -->
</b:if>
<b:comment>=== Archive page ===</b:comment>
<b:if cond='data:view.isArchive'>
  <!-- 1. https://example.blogspot.com/<year> -->
  <!-- 2. https://example.blogspot.com/<year>/<month> -->
  <!-- 3. https://example.blogspot.com/<year>_<month>_<day>_archive.html -->
</b:if>
<b:comment>=== Error page ===</b:comment>
<b:if cond='data:view.isError'>
  <!-- https://example.blogspot.com/<404> -->
</b:if>
<b:comment>=== Preview page ===</b:comment>
<b:if cond='data:view.isPreview'>
  <!-- Preview page -->
</b:if>
<b:comment>=== Layout mode ===</b:comment>
<b:if cond='data:view.isLayoutMode'>
  <!-- https://www.blogger.com/blogger.g?blogID=<blogID>#pageelements -->
</b:if>
```


## Specific URLs

```html
<b:comment>=== Specific item page ===</b:comment>
<b:if cond='data:view.url == "https://example.blogspot.com/1945/08/wow.html"'>
  <!-- https://example.blogspot.com/1945/08/wow.html -->
</b:if>

<b:comment>=== Specific static page ===</b:comment>
<b:if cond='data:view.url == "https://example.blogspot.com/p/wow.html"'>
  <!-- https://example.blogspot.com/p/wow.html -->
</b:if>

<b:comment>=== Specific search (label) page ===</b:comment>
<b:if cond='data:view.search.label == "WOW"'>
  <!-- 1. https://example.blogspot.com/search/label/WOW -->
  <!-- 2. https://example.blogspot.com/search?label=WOW -->
</b:if>

<b:comment>=== Specific search (query) page ===</b:comment>
<b:if cond='data:view.search.query == "wow"'>
  <!-- https://example.blogspot.com/search?q=wow -->
</b:if>
```
