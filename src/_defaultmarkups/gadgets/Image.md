# Image

Add an image from your computer, or from somewhere else on the web.

## Usage

```xml
<b:widget id='Image1' locked='false' title='Image' type='Image' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='displayUrl'>{image_url}</b:widget-setting>
    <b:widget-setting name='displayHeight'>{number}</b:widget-setting>
    <b:widget-setting name='sectionWidth'>{number}</b:widget-setting>
    <b:widget-setting name='shrinkToFit'>true|false</b:widget-setting>
    <b:widget-setting name='displayWidth'>{number}</b:widget-setting>
    <b:widget-setting name='link'>{url}</b:widget-setting>
    <b:widget-setting name='caption'>{string}</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Example

```xml
<b:widget id='Image1' locked='false' title='Image' type='Image' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='displayUrl'>https://via.placeholder.com/512x512</b:widget-setting>
    <b:widget-setting name='displayHeight'>auto</b:widget-setting>
    <b:widget-setting name='sectionWidth'>auto</b:widget-setting>
    <b:widget-setting name='shrinkToFit'>true</b:widget-setting>
    <b:widget-setting name='displayWidth'>auto</b:widget-setting>
    <b:widget-setting name='link'>https://blogger.com/</b:widget-setting>
    <b:widget-setting name='caption'>A caption for the above image.</b:widget-setting>
  </b:widget-settings>
</b:widget>
```
