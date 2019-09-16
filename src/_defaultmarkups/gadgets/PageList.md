# Pages

Display a list of stand-alone pages on your blog.

## Usage

```xml
<b:widget id='PageList1' locked='false' title='Page List' type='PageList' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='pageListJson'>
      <![CDATA[
        {
          'home': {'href': '/', 'title': '{string}', 'position': {number}},
          'link{ID}': {'href': '{url}', 'title': '{string}', 'position': {number}}
        }
      ]]>
    </b:widget-setting>
    <b:widget-setting name='homeTitle'>{string}</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Example

```xml
<b:widget id='PageList1' locked='false' title='Page List' type='PageList' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='pageListJson'>
      <![CDATA[
        {
          'home': {'href': '/', 'title': 'Home', 'position': 0},
          'link0': {'href': 'https://google.com/', 'title': 'Google', 'position': 1},
          'link1': {'href': 'https://blogger.com/', 'title': 'Blogger', 'position': 2}
        }
      ]]>
    </b:widget-setting>
    <b:widget-setting name='homeTitle'>Home</b:widget-setting>
  </b:widget-settings>
</b:widget>
```
