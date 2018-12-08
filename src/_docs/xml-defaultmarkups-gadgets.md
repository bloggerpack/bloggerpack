<!--
@@@title:Gadgets@@@
@@@description:Default markups for gadgets.@@@
@@@section:XML@@@
@@@subsection:Default markups@@@
-->

# Gadgets

Default markups for gadgets.

<figure>
  <div class="doc-badges">
    <div class="doc-badge">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_xml/defaultmarkups/gadgets</span>
    </div>
  </div>
</figure>


## Blog Archive

Make it easy for visitors to navigate your blog with links to older posts.

<figure>
  <div class="doc-badges">
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_xml/defaultmarkups/gadgets/blog-archive.xml</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">CSS</span>
      <span class="doc-badge-item doc-badge-item-info">src/_scss/blogger/gadgets/_blog-archive.scss</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Type</span>
      <span class="doc-badge-item doc-badge-item-info">BlogArchive</span>
    </div>
  </div>
</figure>

### Hierarchy

<div class="doc-example">
  <div class="widget BlogArchive">
    <h3 class="title js-toc-ignore">
      Archive
    </h3>
    <div class="widget-content">
      <ol class="archive-hierarchy-first">
        <li class="archive-hierarchy-first-item">
          <details class="archive-hierarchy-details">
            <summary class="archive-hierarchy-summary">
              <a class="archive-hierarchy-link" href="#">2018</a>
              <span class="archive-hierarchy-count">(3)</span>
            </summary>
            <ul class="archive-hierarchy-second">
              <li class="archive-hierarchy-second-item">
                <a class="archive-hierarchy-link" href="#">March</a>
                <span class="archive-hierarchy-count">(1)</span>
              </li>
              <li class="archive-hierarchy-second-item">
                <a class="archive-hierarchy-link" href="#">February</a>
                <span class="archive-hierarchy-count">(1)</span>
              </li>
              <li class="archive-hierarchy-second-item">
                <a class="archive-hierarchy-link" href="#">January</a>
                <span class="archive-hierarchy-count">(1)</span>
              </li>
            </ul>
          </details>
        </li>
      </ol>
    </div>
  </div>
</div>

```html
<b:widget id='BlogArchive1' locked='false' title='Archive' type='BlogArchive' version='2' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='showStyle'>HIERARCHY</b:widget-setting>
    <b:widget-setting name='yearPattern'>yyyy</b:widget-setting>
    <b:widget-setting name='showWeekEnd'>true</b:widget-setting>
    <b:widget-setting name='monthPattern'>MMMM</b:widget-setting>
    <b:widget-setting name='dayPattern'>MMM dd</b:widget-setting>
    <b:widget-setting name='weekPattern'>MMMM d</b:widget-setting>
    <b:widget-setting name='chronological'>false</b:widget-setting>
    <b:widget-setting name='showPosts'>false</b:widget-setting>
    <b:widget-setting name='frequency'>MONTHLY</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

<div class="doc-example">
  <div class="widget BlogArchive">
    <h3 class="title js-toc-ignore">
      Archive
    </h3>
    <div class="widget-content">
      <ol class="archive-hierarchy-first">
        <li class="archive-hierarchy-first-item">
          <details class="archive-hierarchy-details">
            <summary class="archive-hierarchy-summary">
              <a class="archive-hierarchy-link" href="#">2018</a>
              <span class="archive-hierarchy-count">(2)</span>
            </summary>
            <ul class="archive-hierarchy-second">
              <li class="archive-hierarchy-second-item">
                <a class="archive-hierarchy-link" href="#">February 25</a>
                <span class="archive-hierarchy-count">(1)</span>
              </li>
              <li class="archive-hierarchy-second-item">
                <a class="archive-hierarchy-link" href="#">January 28</a>
                <span class="archive-hierarchy-count">(1)</span>
              </li>
            </ul>
          </details>
        </li>
        <li class="archive-hierarchy-first-item">
          <details class="archive-hierarchy-details">
            <summary class="archive-hierarchy-summary">
              <a class="archive-hierarchy-link" href="#">2017</a>
              <span class="archive-hierarchy-count">(1)</span>
            </summary>
            <ul class="archive-hierarchy-second">
              <li class="archive-hierarchy-second-item">
                <a class="archive-hierarchy-link" href="#">December 31</a>
                <span class="archive-hierarchy-count">(1)</span>
              </li>
            </ul>
          </details>
        </li>
      </ol>
    </div>
  </div>
</div>

```html
<b:widget id='BlogArchive1' locked='false' title='Archive' type='BlogArchive' version='2' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='showStyle'>HIERARCHY</b:widget-setting>
    <b:widget-setting name='yearPattern'>yyyy</b:widget-setting>
    <b:widget-setting name='showWeekEnd'>false</b:widget-setting>
    <b:widget-setting name='monthPattern'>MMMM</b:widget-setting>
    <b:widget-setting name='dayPattern'>MMM dd</b:widget-setting>
    <b:widget-setting name='weekPattern'>MMMM d</b:widget-setting>
    <b:widget-setting name='chronological'>false</b:widget-setting>
    <b:widget-setting name='showPosts'>false</b:widget-setting>
    <b:widget-setting name='frequency'>WEEKLY</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

<div class="doc-example">
  <div class="widget BlogArchive">
    <h3 class="title js-toc-ignore">
      Archive
    </h3>
    <div class="widget-content">
      <ol class="archive-hierarchy-first">
        <li class="archive-hierarchy-first-item">
          <details class="archive-hierarchy-details">
            <summary class="archive-hierarchy-summary">
              <a class="archive-hierarchy-link" href="#">2018</a>
              <span class="archive-hierarchy-count">(3)</span>
            </summary>
            <ul class="archive-hierarchy-second">
              <li class="archive-hierarchy-second-item">
                <details class="archive-hierarchy-details">
                  <summary class="archive-hierarchy-summary">
                    <a class="archive-hierarchy-link" href="#">March</a>
                    <span class="archive-hierarchy-count">(1)</span>
                  </summary>
                  <ul class="archive-hierarchy-third">
                    <li class="archive-hierarchy-third-item">
                      <a class="archive-hierarchy-link" href="#">Mar 01</a>
                      <span class="archive-hierarchy-count">(1)</span>
                    </li>
                  </ul>
                </details>
              </li>
              <li class="archive-hierarchy-second-item">
                <details class="archive-hierarchy-details">
                  <summary class="archive-hierarchy-summary">
                    <a class="archive-hierarchy-link" href="#">February</a>
                    <span class="archive-hierarchy-count">(1)</span>
                  </summary>
                  <ul class="archive-hierarchy-third">
                    <li class="archive-hierarchy-third-item">
                      <a class="archive-hierarchy-link" href="#">Feb 01</a>
                      <span class="archive-hierarchy-count">(1)</span>
                    </li>
                  </ul>
                </details>
              </li>
              <li class="archive-hierarchy-second-item">
                <details class="archive-hierarchy-details">
                  <summary class="archive-hierarchy-summary">
                    <a class="archive-hierarchy-link" href="#">January</a>
                    <span class="archive-hierarchy-count">(1)</span>
                  </summary>
                  <ul class="archive-hierarchy-third">
                    <li class="archive-hierarchy-third-item">
                      <a class="archive-hierarchy-link" href="#">Jan 01</a>
                      <span class="archive-hierarchy-count">(1)</span>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ol>
    </div>
  </div>
</div>

```html
<b:widget id='BlogArchive1' locked='false' title='Archive' type='BlogArchive' version='2' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='showStyle'>HIERARCHY</b:widget-setting>
    <b:widget-setting name='yearPattern'>yyyy</b:widget-setting>
    <b:widget-setting name='showWeekEnd'>true</b:widget-setting>
    <b:widget-setting name='monthPattern'>MMMM</b:widget-setting>
    <b:widget-setting name='dayPattern'>MMM dd</b:widget-setting>
    <b:widget-setting name='weekPattern'>MM/dd</b:widget-setting>
    <b:widget-setting name='chronological'>false</b:widget-setting>
    <b:widget-setting name='showPosts'>false</b:widget-setting>
    <b:widget-setting name='frequency'>DAILY</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Flat

<div class="doc-example">
  <div class="widget BlogArchive">
    <h3 class="title js-toc-ignore">
      Archive
    </h3>
    <div class="widget-content">
      <ol class="archive-flat">
        <li class="archive-flat-item">
          <a class="archive-flat-link" href="#">March 2018</a>
          <span class="archive-flat-count">(1)</span>
        </li>
        <li class="archive-flat-item">
          <a class="archive-flat-link" href="#">February 2018</a>
          <span class="archive-flat-count">(1)</span>
        </li>
        <li class="archive-flat-item">
          <a class="archive-flat-link" href="#">January 2018</a>
          <span class="archive-flat-count">(1)</span>
        </li>
      </ol>
    </div>
  </div>
</div>

```html
<b:widget id='BlogArchive1' locked='false' title='Archive' type='BlogArchive' version='2' visible='true'>
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

### Menu

<div class="doc-example">
  <div class="widget BlogArchive">
    <h3 class="title js-toc-ignore">
      Archive
    </h3>
    <div class="widget-content">
      <select class="archive-menu" onchange="if (this.value) window.location.href = this.value">
        <option selected="selected" value="">Archive</option>
        <option value="#">March 2018 (1)</option>
        <option value="#">February 2018 (1)</option>
        <option value="#">January 2018 (1)</option>
      </select>
    </div>
  </div>
</div>

```html
<b:widget id='BlogArchive1' locked='false' title='Archive' type='BlogArchive' version='2' visible='true'>
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


## Blog Search

Let visitors search your blog.

<figure>
  <div class="doc-badges">
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_xml/defaultmarkups/gadgets/blog-search.xml</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">CSS</span>
      <span class="doc-badge-item doc-badge-item-info">src/_scss/blogger/gadgets/_blog-search.scss</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Type</span>
      <span class="doc-badge-item doc-badge-item-info">BlogSearch</span>
    </div>
  </div>
</figure>

<div class="doc-example">
  <div class="widget BlogSearch">
    <h3 class="title js-toc-ignore">
      Search This Blog
    </h3>
    <div class="widget-content">
      <form action="" class="search-form">
        <div class="search-form-row" role="search">
          <div class="search-form-col">
            <input aria-label="Search this blog" autocomplete="off" class="search-form-input" name="q" placeholder="Search this blog" type="search">
          </div>
          <div class="search-form-col-auto">
            <button class="search-form-submit" type="submit">Search</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

```html
<b:widget id='BlogSearch1' locked='false' title='Search This Blog' type='BlogSearch' version='2' visible='true'/>
```


## Contact Form

Add a Contact Form to your Blog.

<figure>
  <div class="doc-badges">
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_xml/defaultmarkups/gadgets/contact-form.xml</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">CSS</span>
      <span class="doc-badge-item doc-badge-item-info">src/_scss/blogger/gadgets/_contact-form.scss</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Type</span>
      <span class="doc-badge-item doc-badge-item-info">ContactForm</span>
    </div>
  </div>
</figure>

<div class="doc-example">
  <div class="widget ContactForm">
    <h3 class="title js-toc-ignore">
      Contact Form
    </h3>
    <div class="widget-content">
      <form class="contact-form" id="ContactForm10_contact-form" name="contact-form">
        <div class="contact-form-group">
          <label for="ContactForm10_contact-form-name">Name</label>
          <input class="contact-form-name" id="ContactForm10_contact-form-name" name="name" placeholder="Name" size="30" type="text">
        </div>
        <div class="contact-form-group">
          <label for="ContactForm10_contact-form-email">Email *</label>
          <input class="contact-form-email" id="ContactForm10_contact-form-email" name="email" placeholder="Email" required="required" size="30" type="email">
        </div>
        <div class="contact-form-group">
          <label for="ContactForm10_contact-form-email-message">Message *</label>
          <textarea class="contact-form-email-message" cols="25" id="ContactForm10_contact-form-email-message" name="email-message" placeholder="Message" required="required" rows="5"></textarea>
        </div>
        <div>
          <button class="contact-form-button-submit" id="ContactForm10_contact-form-submit" type="submit">
            Send
          </button>
          <div class="contact-form-error-message" id="ContactForm10_contact-form-error-message"></div>
          <div class="contact-form-success-message" id="ContactForm10_contact-form-success-message"></div>
        </div>
      </form>
    </div>
  </div>
</div>

```html
<b:widget id='ContactForm1' locked='false' title='Contact Form' type='ContactForm' version='2' visible='true'/>
```


## Featured Post

Highlight a special post on your blog.

<figure>
  <div class="doc-badges">
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_xml/defaultmarkups/gadgets/featured-post.xml</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">CSS</span>
      <span class="doc-badge-item doc-badge-item-info">src/_scss/blogger/gadgets/_featured-post.scss</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Type</span>
      <span class="doc-badge-item doc-badge-item-info">FeaturedPost</span>
    </div>
  </div>
</figure>

<div class="doc-example">
  <div class="widget FeaturedPost">
    <h3 class="title js-toc-ignore">
      Featured Post
    </h3>
    <div class="widget-content">
      <div class="featured-post">
        <a href="#">
        <img alt="Image" class="featured-post-img" src="https://via.placeholder.com/512x288">
        </a>
        <div class="featured-post-divider"></div>
        <h3 class="featured-post-title js-toc-ignore">
          <a class="featured-post-title-link" href="#">Post title</a>
        </h3>
        <div class="featured-post-divider"></div>
        <div class="featured-post-snippet">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini...
        </div>
      </div>
    </div>
  </div>
</div>

```html
<b:widget id='FeaturedPost1' locked='false' title='Featured Post' type='FeaturedPost' version='2' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='showSnippet'>true</b:widget-setting>
    <b:widget-setting name='showPostTitle'>true</b:widget-setting>
    <b:widget-setting name='showFirstImage'>true</b:widget-setting>
    <b:widget-setting name='useMostRecentPost'>true</b:widget-setting>
  </b:widget-settings>
</b:widget>
```


## Follow by Email

Make it easy for visitors to subscribe to email delivery when you publish a post.

<figure>
  <div class="doc-badges">
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_xml/defaultmarkups/gadgets/follow-by-email.xml</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">CSS</span>
      <span class="doc-badge-item doc-badge-item-info">src/_scss/blogger/gadgets/_follow-by-email.scss</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Type</span>
      <span class="doc-badge-item doc-badge-item-info">FollowByEmail</span>
    </div>
  </div>
</figure>

<div class="doc-example">
  <div class="widget FollowByEmail">
    <h3 class="title js-toc-ignore">
      Follow by Email
    </h3>
    <div class="widget-content">
      <form action="" class="follow-by-email-form" method="post">
        <input aria-label="Email Address" autocomplete="off" class="follow-by-email-form-input" name="email" placeholder="Email Address" type="email">
        <button class="follow-by-email-form-submit" title="Get email notifications" type="submit">
          Get email notifications
        </button>
        <input name="uri" type="hidden" value="">
        <input name="loc" type="hidden" value="en_US">
      </form>
    </div>
  </div>
</div>

```html
<b:widget id='FollowByEmail1' locked='false' title='Follow by Email' type='FollowByEmail' version='2' visible='true'/>
```


## Image

Add an image from your computer, or from somewhere else on the web.

<figure>
  <div class="doc-badges">
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_xml/defaultmarkups/gadgets/image.xml</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">CSS</span>
      <span class="doc-badge-item doc-badge-item-info">src/_scss/blogger/gadgets/_image.scss</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Type</span>
      <span class="doc-badge-item doc-badge-item-info">Image</span>
    </div>
  </div>
</figure>

<div class="doc-example">
  <div class="widget Image">
    <h3 class="title js-toc-ignore">
      Image
    </h3>
    <div class="widget-content">
      <figure class="image">
        <a href="https://blogger.com"><img alt="Image" class="image-img" src="https://via.placeholder.com/512x512"></a>
        <figcaption class="image-caption">
          A caption for the above image.
        </figcaption>
      </figure>
    </div>
  </div>
</div>

```html
<b:widget id='Image1' locked='false' title='Image' type='Image' version='2' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='displayUrl'>https://via.placeholder.com/512x512</b:widget-setting>
    <b:widget-setting name='displayHeight'>172</b:widget-setting>
    <b:widget-setting name='sectionWidth'>258</b:widget-setting>
    <b:widget-setting name='shrinkToFit'>true</b:widget-setting>
    <b:widget-setting name='displayWidth'>258</b:widget-setting>
    <b:widget-setting name='link'>https://blogger.com</b:widget-setting>
    <b:widget-setting name='caption'>A caption for the above image.</b:widget-setting>
  </b:widget-settings>
</b:widget>
```


## Labels

Show all the labels of posts in your blog.

<figure>
  <div class="doc-badges">
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_xml/defaultmarkups/gadgets/labels.xml</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">CSS</span>
      <span class="doc-badge-item doc-badge-item-info">src/_scss/blogger/gadgets/_labels.scss</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Type</span>
      <span class="doc-badge-item doc-badge-item-info">Label</span>
    </div>
  </div>
</figure>

### List

<div class="doc-example">
  <div class="widget Label">
    <h3 class="title js-toc-ignore">
      Labels
    </h3>
    <div class="widget-content">
      <div class="label-list">
        <a class="label-list-link" href="#">Foo<span class="label-list-count">10</span></a>
        <a class="label-list-link" href="#">Bar<span class="label-list-count">20</span></a>
        <a class="label-list-link" href="#">Baz<span class="label-list-count">30</span></a>
      </div>
    </div>
  </div>
</div>

```html
<b:widget id='Label1' locked='false' title='Labels' type='Label' version='2' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
    <b:widget-setting name='display'>LIST</b:widget-setting>
    <b:widget-setting name='selectedLabelsList'/>
    <b:widget-setting name='showType'>ALL</b:widget-setting>
    <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Cloud

<div class="doc-example">
  <div class="widget Label">
    <h3 class="title js-toc-ignore">
      Labels
    </h3>
    <div class="widget-content">
      <ul class="label-cloud">
        <li class="label-cloud-item">
          <a class="label-cloud-link" href="#">Foo<span class="label-cloud-count">10</span></a>
        </li>
        <li class="label-cloud-item">
          <a class="label-cloud-link" href="#">Bar<span class="label-cloud-count">20</span></a>
        </li>
        <li class="label-cloud-item">
          <a class="label-cloud-link" href="#">Baz<span class="label-cloud-count">30</span></a>
        </li>
      </ul>
    </div>
  </div>
</div>

```html
<b:widget id='Label1' locked='false' title='Labels' type='Label' version='2' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
    <b:widget-setting name='display'>CLOUD</b:widget-setting>
    <b:widget-setting name='selectedLabelsList'/>
    <b:widget-setting name='showType'>ALL</b:widget-setting>
    <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
  </b:widget-settings>
</b:widget>
```


## Page Header

Display your blog's title and description.

<figure>
  <div class="doc-badges">
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_xml/defaultmarkups/gadgets/page-header.xml</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">CSS</span>
      <span class="doc-badge-item doc-badge-item-info">src/_scss/blogger/gadgets/_page-header.scss</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Type</span>
      <span class="doc-badge-item doc-badge-item-info">Header</span>
    </div>
  </div>
</figure>

### Behind

<div class="doc-example">
  <div class="widget Header">
    <div class="page-header image-placement-behind is-image" style="background-image: url(https://via.placeholder.com/1200x630);">
      <div class="container" style="width: 100% !important; padding: 0 1rem !important;">
        <h1 class="page-header-title"><a class="page-header-title-link" href="#">Blog Title</a></h1>
        <p class="page-header-description">Blog description.</p>
      </div>
    </div>
  </div>
</div>

```html
<b:widget id='Header1' locked='false' title='(Header)' type='Header' version='2' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='displayUrl'>https://via.placeholder.com/1200x630</b:widget-setting>
    <b:widget-setting name='displayHeight'>768</b:widget-setting>
    <b:widget-setting name='sectionWidth'>258</b:widget-setting>
    <b:widget-setting name='useImage'>true</b:widget-setting>
    <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
    <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
    <b:widget-setting name='displayWidth'>1366</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Replace

<div class="doc-example">
  <div class="widget Header">
    <div class="page-header image-placement-replace is-image">
      <div class="container" style="width: 100% !important; padding: 0 1rem !important;">
        <a href="#"><img alt="" src="https://via.placeholder.com/256x256"></a>
      </div>
    </div>
  </div>
</div>

```html
<b:widget id='Header1' locked='false' title='(Header)' type='Header' version='2' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='displayUrl'>https://via.placeholder.com/256x256</b:widget-setting>
    <b:widget-setting name='displayHeight'>630</b:widget-setting>
    <b:widget-setting name='sectionWidth'>258</b:widget-setting>
    <b:widget-setting name='useImage'>true</b:widget-setting>
    <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
    <b:widget-setting name='imagePlacement'>REPLACE</b:widget-setting>
    <b:widget-setting name='displayWidth'>1200</b:widget-setting>
  </b:widget-settings>
</b:widget>
```

### Before description

<div class="doc-example">
  <div class="widget Header">
    <div class="page-header image-placement-before-description is-image">
      <div class="container" style="width: 100% !important; padding: 0 1rem !important;">
        <a href="#"><img alt="" src="https://via.placeholder.com/256x256"></a>
        <p class="page-header-description">Blog description.</p>
      </div>
    </div>
  </div>
</div>

```html
<b:widget id='Header1' locked='false' title='(Header)' type='Header' version='2' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='displayUrl'>https://via.placeholder.com/256x256</b:widget-setting>
    <b:widget-setting name='displayHeight'>630</b:widget-setting>
    <b:widget-setting name='sectionWidth'>258</b:widget-setting>
    <b:widget-setting name='useImage'>true</b:widget-setting>
    <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
    <b:widget-setting name='imagePlacement'>BEFORE_DESCRIPTION</b:widget-setting>
    <b:widget-setting name='displayWidth'>1200</b:widget-setting>
  </b:widget-settings>
</b:widget>
```


## Popular Posts

Display a list of the most popular posts from your blog.

<figure>
  <div class="doc-badges">
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_xml/defaultmarkups/gadgets/popular-posts.xml</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">CSS</span>
      <span class="doc-badge-item doc-badge-item-info">src/_scss/blogger/gadgets/_popular-posts.scss</span>
    </div>
    <div class="doc-badge" style="width: 100%;">
      <span class="doc-badge-item">Type</span>
      <span class="doc-badge-item doc-badge-item-info">PopularPosts</span>
    </div>
  </div>
</figure>

<div class="doc-example">
  <div class="widget PopularPosts">
    <h3 class="title js-toc-ignore">
      Popular Posts
    </h3>
    <div class="widget-content">
      <div class="popular-post">
        <a href="#"><img alt="Image" class="popular-post-img popular-post-noimg" height="64" src="https://via.placeholder.com/64x64" width="64"></a>
        <div class="popular-post-body">
          <h3 class="popular-post-title js-toc-ignore">
            <a class="popular-post-title-link" href="#">Post title 01</a>
          </h3>
          <ul class="popular-post-meta">
            <li class="popular-post-meta-item">
              <time datetime="2018-01-01T05:59:00-08:00" title="2018-01-01T05:59:00-08:00">
                Jan 01, 2018
              </time>
            </li>
          </ul>
          <div class="popular-post-snippet">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor…
          </div>
        </div>
      </div>
      <div class="popular-post">
        <a href="#"><img alt="Image" class="popular-post-img" height="64" src="https://via.placeholder.com/64x64" width="64"></a>
        <div class="popular-post-body">
          <h3 class="popular-post-title js-toc-ignore">
            <a class="popular-post-title-link" href="#">Post title 02</a>
          </h3>
          <ul class="popular-post-meta">
            <li class="popular-post-meta-item">
              <time datetime="2018-03-01T07:33:00-08:00" title="2018-03-01T07:33:00-08:00">
                Mar 01, 2018
              </time>
            </li>
          </ul>
          <div class="popular-post-snippet">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor…
          </div>
        </div>
      </div>
      <div class="popular-post">
        <a href="#"><img alt="Image" class="popular-post-img popular-post-noimg" height="64" src="https://via.placeholder.com/64x64" width="64"></a>
        <div class="popular-post-body">
          <h3 class="popular-post-title js-toc-ignore">
            <a class="popular-post-title-link" href="#">Post title 03</a>
          </h3>
          <ul class="popular-post-meta">
            <li class="popular-post-meta-item">
              <time datetime="2018-02-01T07:32:00-08:00" title="2018-02-01T07:32:00-08:00">
                Feb 01, 2018
              </time>
            </li>
          </ul>
          <div class="popular-post-snippet">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor…
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<b:widget id='PopularPosts1' locked='false' title='Popular Posts' type='PopularPosts' version='2' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='numItemsToShow'>3</b:widget-setting>
    <b:widget-setting name='showThumbnails'>true</b:widget-setting>
    <b:widget-setting name='showSnippets'>true</b:widget-setting>
    <b:widget-setting name='timeRange'>ALL_TIME</b:widget-setting>
  </b:widget-settings>
</b:widget>
```
