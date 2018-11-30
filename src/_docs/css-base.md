<!--
@@@title:Base CSS@@@
@@@description:Base CSS.@@@
@@@section:CSS@@@
@@@subsection:None@@@
-->

# Base CSS

Base CSS.

<figure>
  <div class="doc-badges">
    <div class="doc-badge">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_scss/_base.scss</span>
    </div>
    <div class="doc-badge">
      <span class="doc-badge-item">Variables</span>
      <span class="doc-badge-item doc-badge-item-success">Yes</span>
    </div>
    <div class="doc-badge">
      <span class="doc-badge-item">Depend on Base CSS</span>
      <span class="doc-badge-item doc-badge-item-success">Yes</span>
    </div>
  </div>
</figure>


## Overview

Base CSS builds upon Normalize and Bootstrap Reboot, providing many HTML elements with somewhat opinionated styles using only element selectors to provide an elegant, consistent, and simple baseline to build upon. Additional styling is done only with classes. For example, we reboot some `<table>` styles for a simpler baseline and later provide `.table`, `.table-bordered`, and more.

Here are our guidelines and reasons for choosing what to override in base CSS:

- Update some browser default values to use `rem`s instead of `em`s for scalable component spacing.
- Avoid `margin-top`. Vertical margins can collapse, yielding unexpected results. More importantly though, a single direction of `margin` is a simpler mental model.
- For easier scaling across device sizes, block elements should use `rem`s for `margin`s.
- Keep declarations of `font`-related properties to a minimum, using `inherit` whenever possible.


## Document and body

The `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:

- The `box-sizing` is globally set on every element—including `*::before` and `*::after`, to `border-box`. This ensures that the declared width of element is never exceeded due to padding or border.
  - No base `font-size` is declared on the `<html>`, but `16px` is assumed (the browser default). `font-size: 1rem` is applied on the `<body>` for easy responsive type-scaling via media queries while respecting user preferences and ensuring a more accessible approach.
- The `<body>` also sets a global `font-family`, `line-height`, and `text-align`. This is inherited later by some form elements to prevent font inconsistencies.
- For safety, the `<body>` has a declared `background-color`, defaulting to `#fff`.


## Headings and paragraphs

All heading elements—e.g., `<h1>`—and `<p>` are reset to have their `margin-top` removed. Headings have `margin-bottom: .5rem` added and paragraphs `margin-bottom: 1rem` for easy spacing.

<div class="doc-example">
  <h1 class="js-toc-ignore">h1. heading</h1>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  <h2 class="js-toc-ignore">h2. heading</h2>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  <h3 class="js-toc-ignore">h3. heading</h3>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  <h4 class="js-toc-ignore">h4. heading</h4>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  <h5 class="js-toc-ignore">h5. heading</h5>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  <h6 class="js-toc-ignore">h6. heading</h6>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
</div>

```html
</p><h1>h1. heading</h1>

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


## Horizontal rules

The HTML `<hr>` element.

<div class="doc-example">
  <p>
    This is the first paragraph of text.
    This is the first paragraph of text.
    This is the first paragraph of text.
    This is the first paragraph of text.
  </p>

  <hr>

  <p>
    This is the second paragraph of text.
    This is the second paragraph of text.
    This is the second paragraph of text.
    This is the second paragraph of text.
  </p>
</div>

```html
<p>
  This is the first paragraph of text.
  This is the first paragraph of text.
  This is the first paragraph of text.
  This is the first paragraph of text.
</p>

<hr/>

<p>
  This is the second paragraph of text.
  This is the second paragraph of text.
  This is the second paragraph of text.
  This is the second paragraph of text.
</p>
```


## Inline text elements

Styling for common inline HTML5 elements.

<div class="doc-example">
  <p><a href="#">Link</a></p>
  <p><strong>Bold</strong></p>
  <p><small>Small</small></p>
  <p><mark>Mark</mark></p>
  <p><abbr title="HyperText Markup Language">HTML</abbr> abbreviations.</p>
  <p><sub>Subscript</sub> and <sup>Superscript</sup></p>
  <p>The <strong>HTML Definition element</strong> (<strong><dfn>&lt;dfn&gt;</dfn></strong>).</p>
</div>

```html
<p><a href='#'>Link</a></p>
<p><strong>Bold</strong></p>
<p><small>Small</small></p>
<p><mark>Mark</mark></p>
<p><abbr title='HyperText Markup Language'>HTML</abbr> abbreviations.</p>
<p><sub>Subscript</sub> and <sup>Superscript</sup></p>
<p>The <strong>HTML Definition element</strong> (<strong><dfn>&lt;dfn&gt;</dfn></strong>).</p>
```


## Code

The `<pre>` element is reset to remove its `margin-top` and add `margin-bottom: 1rem`.

<div class="doc-example">
  <h4 class="js-toc-ignore">Inline code</h4>

  <p>For example, <code>&lt;section&gt;</code> should be wrapped as inline.</p>

  <h4 class="js-toc-ignore">Code block</h4>

<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>

  <h4 class="js-toc-ignore">Variables</h4>

  <p><var>y</var> = <var>m</var><var>x</var> + <var>b</var></p>

  <h4 class="js-toc-ignore">User input</h4>

  <p>
    To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
    To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
  </p>

  <h4 class="js-toc-ignore">Sample output</h4>

  <p><samp>This text is meant to be treated as sample output from a computer program.</samp></p>
</div>

```html
<!-- Inline code -->

<p>For example, <code>&lt;section&gt;</code> should be wrapped as inline.</p>

<!-- Code block -->

<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>

<!-- Variables -->

<p><var>y</var> = <var>m</var><var>x</var> + <var>b</var></p>

<!-- User input -->

<p>
  To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
  To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
</p>

<!-- Sample output -->

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
  <strong>Example, Inc.</strong><br/>
  123 Example Street, Suite 000<br/>
  City, ABC 00000<br/>
  <abbr title='Phone'>P:</abbr> (123) 000-0000
</address>

<address>
  <strong>Full Name</strong><br/>
  <a href='mailto:#'>first.last@example.com</a>
</address>
```


## Figures

Reset `margin` to `0 0 1rem`.

<div class="doc-example">
  <figure>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9BAMAAAB9rnEWAAAAG1BMVEXMzMyWlpacnJy3t7ejo6OxsbGqqqrFxcW+vr4ohmgvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAzUlEQVRYhe3OOwvCMBiF4VOrjWOioGt1saOI4KoI1lFBnOutrilIsxYnf7ZpFB3N7nmWcOB7IQARERERERHRf4px7Omtyt6zgWhwxXf/MpVRWmanh37NcIGzyfHZP+1lQwuZ2vPWvNBoHTBCgdQ3B2Qb7XjYsUFysTNAhTvc9uyBSbUu5/aJXY8wgdu+/e0KCNsGG9eLlX5t3/8nEOP6ftd3/b16b8++OTOmW2YQo9z1S2NEvX37QCk56QFRVlR1r5RCvYmIiIiIiOhvPQH4zR98/KFAbwAAAABJRU5ErkJggg==" alt="Figure example">
    <figcaption>Figure caption</figcaption>
  </figure>
</div>

```html
<figure>
  <img alt='...' src='/path/to/image'/>
  <figcaption>Figure caption</figcaption>
</figure>
```


## Forms and buttons

Various form elements have been rebooted for simpler base styles. Here are some of the most notable changes:

- `<fieldset>`s have no borders, padding, or margin so they can be easily used as wrappers for individual inputs or groups of inputs.
- `<legend>`s, like fieldsets, have also been restyled to be displayed as a heading of sorts.
- `<label>`s are set to display: inline-block to allow margin to be applied.
- `<input>`s, `<select>`s, `</select><textarea>`s, and `</textarea><button>`s are mostly addressed by Normalize, but Reboot sets `font-size: inherit` and `line-height: inherit`, too.
- `</button><textarea>`s are modified to only be resizable vertically as horizontal resizing often “breaks” page layout.

These changes, and more, are demonstrated below.

<div class="doc-example">
  <form>
    <fieldset>
      <legend>Example legend</legend>

      <p>
        <label for="input">Example input</label>
        <input id="input" type="text" placeholder="Example input">
      </p>

      <p>
        <label for="select">Example select</label>
        <select id="select">
          <option value="">Choose...</option>
          <optgroup label="Option group 1">
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </optgroup>
          <optgroup label="Option group 2">
            <option value="">Option 4</option>
            <option value="">Option 5</option>
            <option value="">Option 6</option>
          </optgroup>
        </select>
      </p>

      <p>
        <label>
          <input type="checkbox" value>
          Check this checkbox
        </label>
      </p>

      <p>
        <label>
          <input id="optionsRadios1" name="optionsRadios" type="radio" value="option1" checked>
          Option one is this and that
        </label>
        <label>
          <input id="optionsRadios2" name="optionsRadios" type="radio" value="option2">
          Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
        </label>
        <label>
          <input id="optionsRadios3" name="optionsRadios" type="radio" value="option3" disabled>
          Option three is disabled
        </label>
      </p>

      <p>
        <label for="textarea">Example textarea</label>
        <textarea id="textarea" rows="3"></textarea>
      </p>

      <p>
        <label for="date">Example date</label>
        <input id="date" type="date">
      </p>

      <p>
        <label for="time">Example time</label>
        <input id="time" type="time">
      </p>

      <p>
        <label for="output">Example output</label>
        <output id="output" name="result">100</output>
      </p>

      <p>
        <button type="submit">Button submit</button>
        <input type="submit" value="Input submit button">
        <input type="button" value="Input button">
      </p>

      <p>
        <button type="submit" disabled>Button submit</button>
        <input type="submit" value="Input submit button" disabled>
        <input type="button" value="Input button" disabled>
      </p>
    </fieldset>
  </form>
</div>

```html
<form>
  <fieldset>
    <legend>Example legend</legend>

    <p>
      <label for='input'>Example input</label>
      <input id='input' placeholder='Example input' type='text'/>
    </p>

    <p>
      <label for='select'>Example select</label>
      <select id='select'>
        <option value=''>Choose...</option>
        <optgroup label='Option group 1'>
          <option value=''>Option 1</option>
          <option value=''>Option 2</option>
          <option value=''>Option 3</option>
        </optgroup>
        <optgroup label='Option group 2'>
          <option value=''>Option 4</option>
          <option value=''>Option 5</option>
          <option value=''>Option 6</option>
        </optgroup>
      </select>
    </p>

    <p>
      <label>
        <input type='checkbox' value=''/>
        Check this checkbox
      </label>
    </p>

    <p>
      <label>
        <input checked='' id='optionsRadios1' name='optionsRadios' type='radio' value='option1'/>
        Option one is this and that
      </label>
      <label>
        <input id='optionsRadios2' name='optionsRadios' type='radio' value='option2'/>
        Option two is something else that&#39;s also super long to demonstrate the wrapping of these fancy form controls.
      </label>
      <label>
        <input disabled='' id='optionsRadios3' name='optionsRadios' type='radio' value='option3'/>
        Option three is disabled
      </label>
    </p>

    <p>
      <label for='textarea'>Example textarea</label>
      <textarea id='textarea' rows='3'/>
    </p>

    <p>
      <label for='date'>Example date</label>
      <input id='date' type='date'/>
    </p>

    <p>
      <label for='time'>Example time</label>
      <input id='time' type='time'/>
    </p>

    <p>
      <label for='output'>Example output</label>
      <output id='output' name='result'>100</output>
    </p>

    <p>
      <button type='submit'>Button submit</button>
      <input type='submit' value='Input submit button'/>
      <input type='button' value='Input button'/>
    </p>

    <p>
      <button disabled='' type='submit'>Button submit</button>
      <input disabled='' type='submit' value='Input submit button'/>
      <input disabled='' type='button' value='Input button'/>
    </p>
  </fieldset>
</form>
```
