# Blog Archive

Make it easy for visitors to navigate your blog with links to older posts.

## Usage

```xml
<b:widget id='BlogArchive1' locked='false' title='Archive' type='BlogArchive' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='showStyle'>HIERARCHY|FLAT|MENU</b:widget-setting>
    <b:widget-setting name='yearPattern'>yyyy|yy</b:widget-setting>
    <b:widget-setting name='showWeekEnd'>true|false</b:widget-setting>
    <b:widget-setting name='monthPattern'>MMMM|MMM|MM|M|MMMM yyyy|MMM yyyy</b:widget-setting>
    <b:widget-setting name='dayPattern'>d|dd|MMM dd|MM/dd|dd MMM|dd/MM</b:widget-setting>
    <b:widget-setting name='weekPattern'>MMMM d|MMM d|MM/dd|M/d|d MMMM|d MMM|dd/MM|d/M|M/d/yy|MM/dd/yy|d/M/yy|dd/MM/yy</b:widget-setting>
    <b:widget-setting name='chronological'>true|false</b:widget-setting>
    <b:widget-setting name='showPosts'>true|false</b:widget-setting>
    <b:widget-setting name='frequency'>DAILY|WEEKLY|MONTHLY|YEARLY</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Hierarchy example

```xml
<b:widget id='BlogArchive1' locked='false' title='Archive' type='BlogArchive' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='showStyle'>HIERARCHY</b:widget-setting>
    <b:widget-setting name='yearPattern'>yyyy</b:widget-setting>
    <b:widget-setting name='showWeekEnd'>true</b:widget-setting>
    <b:widget-setting name='monthPattern'>MMMM yyyy</b:widget-setting>
    <b:widget-setting name='dayPattern'>MMM dd</b:widget-setting>
    <b:widget-setting name='weekPattern'>MMMM d</b:widget-setting>
    <b:widget-setting name='chronological'>false</b:widget-setting>
    <b:widget-setting name='showPosts'>false</b:widget-setting>
    <b:widget-setting name='frequency'>MONTHLY</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Flat example

```xml
<b:widget id='BlogArchive1' locked='false' title='Archive' type='BlogArchive' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='showStyle'>FLAT</b:widget-setting>
    <b:widget-setting name='yearPattern'>yyyy</b:widget-setting>
    <b:widget-setting name='showWeekEnd'>true</b:widget-setting>
    <b:widget-setting name='monthPattern'>MMMM yyyy</b:widget-setting>
    <b:widget-setting name='dayPattern'>MMM dd</b:widget-setting>
    <b:widget-setting name='weekPattern'>MMMM d</b:widget-setting>
    <b:widget-setting name='chronological'>false</b:widget-setting>
    <b:widget-setting name='showPosts'>false</b:widget-setting>
    <b:widget-setting name='frequency'>MONTHLY</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Menu example

```xml
<b:widget id='BlogArchive1' locked='false' title='Archive' type='BlogArchive' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='showStyle'>MENU</b:widget-setting>
    <b:widget-setting name='yearPattern'>yyyy</b:widget-setting>
    <b:widget-setting name='showWeekEnd'>true</b:widget-setting>
    <b:widget-setting name='monthPattern'>MMMM yyyy</b:widget-setting>
    <b:widget-setting name='dayPattern'>MMM dd</b:widget-setting>
    <b:widget-setting name='weekPattern'>MMMM d</b:widget-setting>
    <b:widget-setting name='chronological'>false</b:widget-setting>
    <b:widget-setting name='showPosts'>false</b:widget-setting>
    <b:widget-setting name='frequency'>MONTHLY</b:widget-setting>
  </b:widget-settings>
</b:widget>
```
