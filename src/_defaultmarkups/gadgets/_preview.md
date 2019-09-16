# Preview gadgets

## Usage

Place the following code before `</body>` tag:

```xml
<b:if cond='data:blog.view == "preview-gadgets" or data:view.isLayoutMode'>
<!--(bake _defaultmarkups/gadgets/_preview.xml)-->
</b:if>
```

Open `https://your-blog.blogspot.com/?view=preview-gadgets`.
