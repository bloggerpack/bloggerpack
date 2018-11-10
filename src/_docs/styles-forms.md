<!--
@@@title:Forms@@@
@@@section:Styles@@@
-->

# Forms

Simple form control styles.


## Form controls

<div class="doc-example">
  <form>
    <p>
      <label for="exampleFormControlInput1">Email address</label>
      <input class="form-control" id="exampleFormControlInput1" type="email" placeholder="name@example.com">
    </p>

    <p>
      <label for="exampleFormControlSelect1">Example select</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </p>

    <p>
      <label for="exampleFormControlSelect2">Example multiple select</label>
      <select multiple class="form-control" id="exampleFormControlSelect2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </p>

    <p>
      <label for="exampleFormControlTextarea1">Example textarea</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </p>
  </form>
</div>

```html
<form>
  <p>
    <label for="exampleFormControlInput1">Email address</label>
    <input class="form-control" id="exampleFormControlInput1" type="email" placeholder="name@example.com">
  </p>

  <p>
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </p>

  <p>
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </p>

  <p>
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </p>
</form>
```

### Readonly

<div class="doc-example">
  <input class="form-control" type="text" placeholder="Readonly input here…" readonly>
</div>

```html
<input class="form-control" type="text" placeholder="Readonly input here…" readonly>
```


## Checkboxes and radios

<div class="doc-example">
  <div class="form-check">
    <input class="form-check-input" id="defaultCheck1" type="checkbox" value="option1">
    <label class="form-check-label" for="defaultCheck1">
      Default checkbox
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" id="defaultCheck2" type="checkbox" value="option2">
    <label class="form-check-label" for="defaultCheck2">
      Second default checkbox
    </label>
  </div>
</div>

```html
<div class="form-check">
  <input class="form-check-input" id="defaultCheck1" type="checkbox" value="option1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" id="defaultCheck2" type="checkbox" value="option2">
  <label class="form-check-label" for="defaultCheck2">
    Second default checkbox
  </label>
</div>
```

<div class="doc-example">
  <div class="form-check">
    <input class="form-check-input" id="exampleRadios1" name="exampleRadios" type="radio" value="option1" checked>
    <label class="form-check-label" for="exampleRadios1">
      Default radio
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" id="exampleRadios2" name="exampleRadios" type="radio" value="option2">
    <label class="form-check-label" for="exampleRadios2">
      Second default radio
    </label>
  </div>
</div>

```html
<div class="form-check">
  <input class="form-check-input" id="exampleRadios1" name="exampleRadios" type="radio" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" id="exampleRadios2" name="exampleRadios" type="radio" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
```

### Inline

<div class="doc-example">
  <div class="form-check form-check-inline">
    <input class="form-check-input" id="inlineCheckbox1" type="checkbox" value="option1">
    <label class="form-check-label" for="inlineCheckbox1">1</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" id="inlineCheckbox2" type="checkbox" value="option2">
    <label class="form-check-label" for="inlineCheckbox2">2</label>
  </div>
</div>

```html
<div class="form-check form-check-inline">
  <input class="form-check-input" id="inlineCheckbox1" type="checkbox" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" id="inlineCheckbox2" type="checkbox" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
```

<div class="doc-example">
  <div class="form-check form-check-inline">
    <input class="form-check-input" id="inlineRadio1" name="inlineRadioOptions" type="radio" value="option1">
    <label class="form-check-label" for="inlineRadio1">1</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" id="inlineRadio2" name="inlineRadioOptions" type="radio" value="option2">
    <label class="form-check-label" for="inlineRadio2">2</label>
  </div>
</div>

```html
<div class="form-check form-check-inline">
  <input class="form-check-input" id="inlineRadio1" name="inlineRadioOptions" type="radio" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" id="inlineRadio2" name="inlineRadioOptions" type="radio" value="option2">
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
```


## Form groups

<div class="doc-example">
  <form>
    <div class="form-group">
      <label for="formGroupExampleInput">Example label</label>
      <input class="form-control" id="formGroupExampleInput" type="text" placeholder="Example input">
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Another label</label>
      <input class="form-control" id="formGroupExampleInput2" type="text" placeholder="Another input">
    </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" id="formGroupExampleCheck" type="checkbox" value="option">
        <label class="form-check-label" for="formGroupExampleCheck">
          Check this
        </label>
      </div>
    </div>
    <button class="button button-primary" type="submit">Submit</button>
  </form>
</div>

```html
<form>
  <div class="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input class="form-control" id="formGroupExampleInput" type="text" placeholder="Example input">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input class="form-control" id="formGroupExampleInput2" type="text" placeholder="Another input">
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" id="formGroupExampleCheck" type="checkbox" value="option">
      <label class="form-check-label" for="formGroupExampleCheck">
        Check this
      </label>
    </div>
  </div>
  <button class="button button-primary" type="submit">Submit</button>
</form>
```


## Help text

<div class="doc-example">
  <form>
    <div class="form-group">
      <label for="inputHelpText">Password</label>
      <input class="form-control" id="inputHelpText" type="password">
      <span class="form-text">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
      </span>
    </div>
    <button class="button button-primary" type="submit">Submit</button>
  </form>
</div>

```html
<form>
  <div class="form-group">
    <label for="inputHelpText">Password</label>
    <input class="form-control" id="inputHelpText" type="password">
    <span class="form-text">
      Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
    </span>
  </div>
  <button class="button button-primary" type="submit">Submit</button>
</form>
```


## Disabled forms

<div class="doc-example">
  <form>
    <div class="form-group">
      <label for="disabledInput">Disabled input</label>
      <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
    </div>
    <div class="form-group">
      <div class="form-check form-check-inline">
        <input class="form-check-input" id="disabledCheckbox1" type="checkbox" value="option1" disabled>
        <label class="form-check-label" for="disabledCheckbox1">Disabled checkbox 1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" id="disabledCheckbox2" type="checkbox" value="option2" disabled>
        <label class="form-check-label" for="disabledCheckbox2">Disabled checkbox 2</label>
      </div>
    </div>
    <div class="form-group">
      <div class="form-check form-check-inline">
        <input class="form-check-input" id="disabledRadios1" name="disabledRadios1" type="radio" value="option1" disabled>
        <label class="form-check-label" for="disabledRadios1">
          Disabled radio 1
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" id="disabledRadios2" name="disabledRadios2" type="radio" value="option2" disabled>
        <label class="form-check-label" for="disabledRadios2">
          Disabled radio 2
        </label>
      </div>
    </div>
  </form>
</div>

```html
<form>
  <div class="form-group">
    <label for="disabledInput">Disabled input</label>
    <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
  </div>
  <div class="form-group">
    <div class="form-check form-check-inline">
      <input class="form-check-input" id="disabledCheckbox1" type="checkbox" value="option1" disabled>
      <label class="form-check-label" for="disabledCheckbox1">Disabled checkbox 1</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" id="disabledCheckbox2" type="checkbox" value="option2" disabled>
      <label class="form-check-label" for="disabledCheckbox2">Disabled checkbox 2</label>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check form-check-inline">
      <input class="form-check-input" id="disabledRadios1" name="disabledRadios1" type="radio" value="option1" disabled>
      <label class="form-check-label" for="disabledRadios1">
        Disabled radio 1
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" id="disabledRadios2" name="disabledRadios2" type="radio" value="option2" disabled>
      <label class="form-check-label" for="disabledRadios2">
        Disabled radio 2
      </label>
    </div>
  </div>
</form>
```

### Disabled fieldset

<div class="doc-example">
  <form>
    <fieldset disabled>
      <div class="form-group">
        <label for="disabledFieldsetInput">Example label</label>
        <input class="form-control" id="disabledFieldsetInput" type="text" placeholder="Example input">
      </div>
      <div class="form-group">
        <label for="disabledFieldsetInput2">Another label</label>
        <input class="form-control" id="disabledFieldsetInput2" type="text" placeholder="Another input">
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" id="disabledFieldsetCheck" type="checkbox" value="option">
          <label class="form-check-label" for="disabledFieldsetCheck">
            Check this
          </label>
        </div>
      </div>
      <button class="button button-primary" type="submit">Submit</button>
    </fieldset>
  </form>
</div>

```html
<form>
  <fieldset disabled>
    <div class="form-group">
      <label for="disabledFieldsetInput">Example label</label>
      <input class="form-control" id="disabledFieldsetInput" type="text" placeholder="Example input">
    </div>
    <div class="form-group">
      <label for="disabledFieldsetInput2">Another label</label>
      <input class="form-control" id="disabledFieldsetInput2" type="text" placeholder="Another input">
    </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" id="disabledFieldsetCheck" type="checkbox" value="option">
        <label class="form-check-label" for="disabledFieldsetCheck">
          Check this
        </label>
      </div>
    </div>
    <button class="button button-primary" type="submit">Submit</button>
  </fieldset>
</form>
```
