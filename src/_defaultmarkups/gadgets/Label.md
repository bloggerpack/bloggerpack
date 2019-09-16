# Labels

Show all the labels of posts in your blog.

## Usage

```xml
<b:widget id='Label1' locked='false' title='Labels' type='Label' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='sorting'>ALPHA|FREQUENCY</b:widget-setting>
    <b:widget-setting name='display'>LIST|CLOUD</b:widget-setting>
    <b:widget-setting name='selectedLabelsList'>{Label1, Label2, Label3}|Leave blank to show all labels</b:widget-setting>
    <b:widget-setting name='showType'>ALL|USER_SELECTED</b:widget-setting>
    <b:widget-setting name='showFreqNumbers'>true|false</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### List

```xml
<b:widget id='Label1' locked='false' title='Labels' type='Label' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
    <b:widget-setting name='display'>LIST</b:widget-setting>
    <b:widget-setting name='selectedLabelsList'/>
    <b:widget-setting name='showType'>ALL</b:widget-setting>
    <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
  </b:widget-settings>
</b:widget>

<b:widget id='Label1' locked='false' title='Labels' type='Label' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
    <b:widget-setting name='display'>LIST</b:widget-setting>
    <b:widget-setting name='selectedLabelsList'>Label1, Label2, Label3</b:widget-setting>
    <b:widget-setting name='showType'>USER_SELECTED</b:widget-setting>
    <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Cloud

```xml
<b:widget id='Label1' locked='false' title='Labels' type='Label' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
    <b:widget-setting name='display'>CLOUD</b:widget-setting>
    <b:widget-setting name='selectedLabelsList'/>
    <b:widget-setting name='showType'>ALL</b:widget-setting>
    <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
  </b:widget-settings>
</b:widget>

<b:widget id='Label1' locked='false' title='Labels' type='Label' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
    <b:widget-setting name='display'>CLOUD</b:widget-setting>
    <b:widget-setting name='selectedLabelsList'>Label1, Label2, Label3</b:widget-setting>
    <b:widget-setting name='showType'>USER_SELECTED</b:widget-setting>
    <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
  </b:widget-settings>
</b:widget>
```
