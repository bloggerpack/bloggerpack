# Text List

Add a list of your favorite books, movies, or anything you like.

## Usage

```xml
<b:widget id='TextList1' locked='false' title='Text List' type='TextList' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='shownum'>{number}|Leave blank to show all items</b:widget-setting>
    <b:widget-setting name='sorting'>NONE|ALPHABETICAL|REVERSE_ALPHABETICAL</b:widget-setting>
    <b:widget-setting name='item-{INDEX}'>{item}</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Example

```xml
<b:widget id='TextList1' locked='false' title='Text List' type='TextList' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='shownum'/>
    <b:widget-setting name='sorting'>NONE</b:widget-setting>
    <b:widget-setting name='item-0'>Item 1</b:widget-setting>
    <b:widget-setting name='item-1'>Item 2</b:widget-setting>
    <b:widget-setting name='item-2'>Item 3</b:widget-setting>
  </b:widget-settings>
</b:widget>
```
