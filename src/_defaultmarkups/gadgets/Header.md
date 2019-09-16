# Page Header

Display your blog's title and description.

## Usage

```xml
<b:widget id='Header1' locked='false' title='(Header)' type='Header' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='displayUrl'>{image_url}</b:widget-setting>
    <b:widget-setting name='displayHeight'>{number}</b:widget-setting>
    <b:widget-setting name='sectionWidth'>{number}</b:widget-setting>
    <b:widget-setting name='useImage'>true|false</b:widget-setting>
    <b:widget-setting name='shrinkToFit'>true|false</b:widget-setting>
    <b:widget-setting name='imagePlacement'>BEHIND|REPLACE|BEFORE_DESCRIPTION</b:widget-setting>
    <b:widget-setting name='displayWidth'>{number}</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Behind example

```xml
<b:widget id='Header1' locked='false' title='(Header)' type='Header' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='displayUrl'>https://via.placeholder.com/1200x630</b:widget-setting>
    <b:widget-setting name='displayHeight'>auto</b:widget-setting>
    <b:widget-setting name='sectionWidth'>auto</b:widget-setting>
    <b:widget-setting name='useImage'>true</b:widget-setting>
    <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
    <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
    <b:widget-setting name='displayWidth'>auto</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Replace example

```xml
<b:widget id='Header1' locked='false' title='(Header)' type='Header' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='displayUrl'>https://via.placeholder.com/256x256</b:widget-setting>
    <b:widget-setting name='displayHeight'>auto</b:widget-setting>
    <b:widget-setting name='sectionWidth'>auto</b:widget-setting>
    <b:widget-setting name='useImage'>true</b:widget-setting>
    <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
    <b:widget-setting name='imagePlacement'>REPLACE</b:widget-setting>
    <b:widget-setting name='displayWidth'>auto</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Before description example

```xml
<b:widget id='Header1' locked='false' title='(Header)' type='Header' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='displayUrl'>https://via.placeholder.com/256x256</b:widget-setting>
    <b:widget-setting name='displayHeight'>auto</b:widget-setting>
    <b:widget-setting name='sectionWidth'>auto</b:widget-setting>
    <b:widget-setting name='useImage'>true</b:widget-setting>
    <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
    <b:widget-setting name='imagePlacement'>BEFORE_DESCRIPTION</b:widget-setting>
    <b:widget-setting name='displayWidth'>auto</b:widget-setting>
  </b:widget-settings>
</b:widget>
```
