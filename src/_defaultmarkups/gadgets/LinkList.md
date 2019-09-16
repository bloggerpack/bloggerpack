# Link List

Display a collection of your favorite sites, blogs, or web pages for your visitors.

## Usage

```xml
<b:widget id='LinkList1' locked='false' title='Link List' type='LinkList' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='shownum'>{number}|Leave blank to show all links</b:widget-setting>
    <b:widget-setting name='sorting'>NONE|ALPHABETICAL|REVERSE_ALPHABETICAL</b:widget-setting>
    <b:widget-setting name='text-{INDEX}'>{string}</b:widget-setting>
    <b:widget-setting name='link-{INDEX}'>{url}</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Example

```xml
<b:widget id='LinkList1' locked='false' title='Link List' type='LinkList' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='shownum'/>
    <b:widget-setting name='sorting'>NONE</b:widget-setting>
    <b:widget-setting name='text-0'>Google</b:widget-setting>
    <b:widget-setting name='link-0'>https://google.com/</b:widget-setting>
    <b:widget-setting name='text-1'>Blogger</b:widget-setting>
    <b:widget-setting name='link-1'>https://blogger.com/</b:widget-setting>
  </b:widget-settings>
</b:widget>
```
