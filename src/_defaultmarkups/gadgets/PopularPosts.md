# Popular Posts

Display a list of the most popular posts from your blog.

## Usage

```xml
<b:widget id='PopularPosts1' locked='false' title='Popular Posts' type='PopularPosts' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='numItemsToShow'>{1-10}</b:widget-setting>
    <b:widget-setting name='showThumbnails'>true|false</b:widget-setting>
    <b:widget-setting name='showSnippets'>true|false</b:widget-setting>
    <b:widget-setting name='timeRange'>ALL_TIME|LAST_YEAR|LAST_MONTH|LAST_WEEK</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Example

```xml
<b:widget id='PopularPosts1' locked='false' title='Popular Posts' type='PopularPosts' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='numItemsToShow'>3</b:widget-setting>
    <b:widget-setting name='showThumbnails'>true</b:widget-setting>
    <b:widget-setting name='showSnippets'>true</b:widget-setting>
    <b:widget-setting name='timeRange'>ALL_TIME</b:widget-setting>
  </b:widget-settings>
</b:widget>
```
