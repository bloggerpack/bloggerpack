<!--
@@@title:Reboot@@@
@@@section:CSS@@@
-->

# Reboot

An elegant, consistent, and simple baseline to build upon. Some code and documentation manually forked from [Bootstrap](https://getbootstrap.com).


## Normalize.css

For improved cross-browser rendering, we use [Normalize.css](https://necolas.github.io/normalize.css).


## Headings and paragraphs

All heading elements—e.g., `<h1>`—and `<p>` are reset to have their `margin-top` removed. Headings have `margin-bottom: .5rem` added and paragraphs `margin-bottom: 1rem` for easy spacing.

<div class="doc-example">
  <h1>h1. heading</h1>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  <h2>h2. heading</h2>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  <h3>h3. heading</h3>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  <h4>h4. heading</h4>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  <h5>h5. heading</h5>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  <h6>h6. heading</h6>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
</div>

```html
<h1>h1. heading</h1>

<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

<h2>h2. heading</h2>

<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

<h3>h3. heading</h3>

<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

<h4>h4. heading</h4>

<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

<h5>h5. heading</h5>

<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

<h6>h6. heading</h6>

<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
```


## Inline text elements

Styling for common inline HTML5 elements.

<div class="doc-example">
  <p>You can use the mark tag to <mark>highlight</mark> text.</p>
  <p><del>This line of text is meant to be treated as deleted text.</del></p>
  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
  <p><u>This line of text will render as underlined.</u></p>
  <p><small>This line of text is meant to be treated as fine print.</small></p>
  <p><strong>This line rendered as bold text.</strong></p>
  <p><em>This line rendered as italicized text.</em></p>
  <p><abbr title="HyperText Markup Language">HTML</abbr> abbreviations.</p>
</div>

```html
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
<p><abbr title="HyperText Markup Language">HTML</abbr> abbreviations.</p>
```


## Code

The `<pre>` element is reset to remove its `margin-top` and use `rem` units for its `margin-bottom`.

<div class="doc-example">
  <h4>Inline code</h4>

  <p>For example, <code>&lt;section&gt;</code> should be wrapped as inline.</p>

  <h4>Code block</h4>

<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>

  <h4>Variables</h4>

  <p><var>y</var> = <var>m</var><var>x</var> + <var>b</var></p>

  <h4>User input</h4>

  <p>
    To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
    To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
  </p>

  <h4>Sample output</h4>

  <p><samp>This text is meant to be treated as sample output from a computer program.</samp></p>
</div>

```html
<h4>Inline code</h4>

<p>For example, <code>&lt;section&gt;</code> should be wrapped as inline.</p>

<h4>Code block</h4>

<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>

<h4>Variables</h4>

<p><var>y</var> = <var>m</var><var>x</var> + <var>b</var></p>

<h4>User input</h4>

<p>
  To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
  To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
</p>

<h4>Sample output</h4>

<p><samp>This text is meant to be treated as sample output from a computer program.</samp></p>
```


## Lists

All lists—`<ul>`, `<ol>`, and `<dl>`—have their `margin-top` removed and a `margin-bottom: 1rem`. Nested lists have no `margin-bottom`.

For simpler styling, clear hierarchy, and better spacing, description lists have updated `margin`s. `<dd>`s reset `margin-left` to `0` and add `margin-bottom: .5rem`. `<dt>`s are **bolded**.

<div class="doc-example">
  <ul>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
  <ol>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>Nulla volutpat aliquam velit</li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ol>
  <dl>
    <dt>Description lists</dt>
    <dd>A description list is perfect for defining terms.</dd>
    <dt>Euismod</dt>
    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
    <dd>Donec id elit non mi porta gravida at eget metus.</dd>
    <dt>Malesuada porta</dt>
    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
  </dl>
</div>

```html
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>

<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit</li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>

<dl>
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
</dl>
```


## Tables

Tables are slightly adjusted to style `<caption>`s, collapse borders, and ensure consistent `text-align` throughout.

<div class="doc-example">
  <table>
    <caption>
      This is an example table, and this is its caption to describe the contents.
    </caption>
    <thead>
      <tr>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table>
  <caption>
    This is an example table, and this is its caption to describe the contents.
  </caption>
  <thead>
    <tr>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</table>
```


## Blockquotes

The default `margin` on blockquotes is `1em 40px`, so we reset that to `0 0 1rem` for something more consistent with other elements.

<div class="doc-example">
  <blockquote>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
  </blockquote>
</div>

```html
<blockquote>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
</blockquote>
```


## Addresses

The `<address>` element is updated to reset the browser default `font-style` from `italic` to `normal`. `line-height` is also now inherited, and `margin-bottom: 1rem` has been added. `<address>`s are for presenting contact information for the nearest ancestor (or an entire body of work). Preserve formatting by ending lines with `<br>`.

<div class="doc-example">
  <address>
    <strong>Example, Inc.</strong><br>
    123 Example Street, Suite 000<br>
    City, ABC 00000<br>
    <abbr title="Phone">P:</abbr> (123) 000-0000
  </address>

  <address>
    <strong>Full Name</strong><br>
    <a href="mailto:#">first.last@example.com</a>
  </address>
</div>

```html
<address>
  <strong>Example, Inc.</strong><br>
  123 Example Street, Suite 000<br>
  City, ABC 00000<br>
  <abbr title="Phone">P:</abbr> (123) 000-0000
</address>

<address>
  <strong>Full Name</strong><br>
  <a href="mailto:#">first.last@example.com</a>
</address>
```
