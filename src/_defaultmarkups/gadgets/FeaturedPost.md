# Featured Post

Highlight a special post on your blog.

## Usage

```xml
<b:widget id='FeaturedPost1' locked='false' title='Featured Post' type='FeaturedPost' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='showSnippet'>true|false</b:widget-setting>
    <b:widget-setting name='showPostTitle'>true|false</b:widget-setting>
    <b:widget-setting name='showFirstImage'>true|false</b:widget-setting>
    <b:widget-setting name='useMostRecentPost'>true|false</b:widget-setting>
    <b:widget-setting name='postId'>{post_ID}</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Example

```xml
<b:widget id='FeaturedPost1' locked='false' title='Featured Post' type='FeaturedPost' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='showSnippet'>true</b:widget-setting>
    <b:widget-setting name='showPostTitle'>true</b:widget-setting>
    <b:widget-setting name='showFirstImage'>true</b:widget-setting>
    <b:widget-setting name='useMostRecentPost'>true</b:widget-setting>
  </b:widget-settings>
</b:widget>
```
