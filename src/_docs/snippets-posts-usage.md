<!--
@@@title:Usage@@@
@@@description:Learn how to use posts snippets.@@@
@@@section:Snippets@@@
@@@subsection:Posts@@@
-->

# Usage

Learn how to use posts snippets.


## Loops

Posts snippets must be used within the loop tag.

```html
<b:loop values='data:posts' var='post'>
  ...
</b:loop>
```


## Wrapper

### No fallback

```html
<b:loop values='data:posts' var='post'>

  <b:if cond='...'>
    <div class='wrapper'>
      ...
    </div>
  </b:if>

</b:loop>
```

### With fallback

```html
<b:loop values='data:posts' var='post'>

  <!-- Example 1 -->
  <div class='wrapper'>
    <b:if cond='...'>
      ...
    <b:else/><!-- fallback -->
      ...
    </b:if>
  </div>

  <!-- Example 2 -->
  <b:if cond='...'>
    <div class='wrapper'>
      ...
    </div>
  <b:else/><!-- fallback -->
    <div class='wrapper another-class'>
      ...
    </div>
  </b:if>

</b:loop>
```
