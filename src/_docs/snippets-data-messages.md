<!--
@@@title:Data messages@@@
@@@section:Snippets@@@
-->

# Data messages

Messages which will be translated into the language used by the blog.

**Usage**

```html
<data:messages.[name]/>
```

```html
<b:eval expr='data:messages.[name]'/>
```

```html
<b:message name='messages.[name]'/>
```

```html
<b:message name='messages.[name]'>
  <b:param value='...' name='...'/>
</b:message>
```


## .adsGoHere

Gadget type: `Global`

**Usage**

```html
<data:messages.adsGoHere/>
```

```html
<b:eval expr='data:messages.adsGoHere'/>
```

```html
<b:message name='messages.adsGoHere'/>
```

**Values**

| Language | Value |
| --- | --- |
| English | `Ads go here` |
| French | `Les annonces apparaissent ici` |
| Indonesian | `Iklan ada di sini` |
| Portuguese | `Os anúncios são apresentados aqui` |
| Spanish | `Aquí van los anuncios` |
| Vietnamese | `Quảng cáo hiển thị ở đây` |


## .archive

Gadget type: `Global`

**Usage**

```html
<data:messages.archive/>
```

```html
<b:eval expr='data:messages.archive'/>
```

```html
<b:message name='messages.archive'/>
```

**Values**

| Language | Value |
| --- | --- |
| English | `Archive` |
| French | `Archiver` |
| Indonesian | `Arsip` |
| Portuguese | `Arquivar` |
| Spanish | `Archivo` |
| Vietnamese | `Lưu trữ` |


## .at

Gadget type: `Global`

**Usage**

```html
<data:messages.at/>
```

```html
<b:eval expr='data:messages.at'/>
```

```html
<b:message name='messages.at'/>
```

**Values**

| Language | Value |
| --- | --- |
| English | `at` |
| French | `à` |
| Indonesian | `pukul` |
| Portuguese | `à(s)` |
| Spanish | `a las` |
| Vietnamese | `lúc` |


## .authorSaid

Gadget type: `Global`

**Usage**

```html
<b:message name='messages.authorSaid'>
  <b:param expr:value='data:post.author.name' name='authorName'/>
</b:message>
```

**Values**

| Language | Value |
| --- | --- |
| English | `author_name said...` |
| French | `author_name a dit...` |
| Indonesian | `author_name mengatakan...` |
| Portuguese | `author_name disse...` |
| Spanish | `author_name ha dicho...` |
| Vietnamese | `author_name nói...` |


## .authorSaidWithLink

Gadget type: `Global`

**Usage**

```html
<b:message name='messages.authorSaidWithLink'>
  <b:param expr:value='data:post.author.name' name='authorName'/>
  <b:param expr:value='data:post.author.profileUrl' name='authorUrl'/>
</b:message>
```

**Values**

| Language | Value |
| --- | --- |
| English | `<a href='profile_link'>author_name</a> said...` |
| French | `<a href='profile_link'>author_name</a> a dit...` |
| Indonesian | `<a href='profile_link'>author_name</a> mengatakan...` |
| Portuguese | `<a href='profile_link'>author_name</a> disse...` |
| Spanish | `<a href='profile_link'>author_name</a> ha dicho...` |
| Vietnamese | `<a href='profile_link'>author_name</a> nói...` |


## .blogArchive

Gadget type: `Global`

**Usage**

```html
<data:messages.blogArchive/>
```

```html
<b:eval expr='data:messages.blogArchive'/>
```

```html
<b:message name='messages.blogArchive'/>
```

**Values**

| Language | Value |
| --- | --- |
| English | `Blog Archive` |
| French | `Archives du blog` |
| Indonesian | `Arsip Blog` |
| Portuguese | `Arquivo do blogue` |
| Spanish | `Archivo del blog` |
| Vietnamese | `Lưu trữ Blog` |


## .blogAuthors

Gadget type: `Global`

**Usage**

```html
<data:messages.blogAuthors/>
```

```html
<b:eval expr='data:messages.blogAuthors'/>
```

```html
<b:message name='messages.blogAuthors'/>
```

**Values**

| Language | Value |
| --- | --- |
| English | `Contributors` |
| French | `Contributeurs` |
| Indonesian | `Penulis blog` |
| Portuguese | `Autores do blog` |
| Spanish | `Autores del blog` |
| Vietnamese | `Tác giả blog` |


## .by

Gadget type: `Global`

**Usage**

```html
<data:messages.by/>
```

```html
<b:eval expr='data:messages.by'/>
```

```html
<b:message name='messages.by'/>
```

**Values**

| Language | Value |
| --- | --- |
| English | `By` |
| French | `Par` |
| Indonesian | `Oleh` |
| Portuguese | `Por` |
| Spanish | `De` |
| Vietnamese | `Bởi` |


## .byAuthor

Gadget type: `Global`

**Usage**

```html
<b:message name='messages.byAuthor'>
  <b:param expr:value='data:post.author.name' name='authorName'/>
</b:message>
```

**Values**

| Language | Value |
| --- | --- |
| English | `By author_name` |
| French | `Par author_name` |
| Indonesian | `Oleh author_name` |
| Portuguese | `Por author_name` |
| Spanish | `De author_name` |
| Vietnamese | `Bởi author_name` |


## .byAuthorLink

Gadget type: `Global`

**Usage**

```html
<b:message name='messages.byAuthorLink'>
  <b:param expr:value='data:post.author.name' name='authorName'/>
  <b:param expr:value='data:post.author.profileUrl' name='authorUrl'/>
</b:message>
```

**Values**

| Language | Value |
| --- | --- |
| English | `By <a href='profile_link'>author_name</a>` |
| French | `Par <a href='profile_link'>author_name</a>` |
| Indonesian | `Oleh <a href='profile_link'>author_name</a>` |
| Portuguese | `Por <a href='profile_link'>author_name</a>` |
| Spanish | `De <a href='profile_link'>author_name</a>` |
| Vietnamese | `Bởi <a href='profile_link'>author_name</a>` |


## .comments

Gadget type: `Global`

**Usage**

```html
<data:messages.comments/>
```

```html
<b:eval expr='data:messages.comments'/>
```

```html
<b:message name='messages.comments'/>
```

**Values**

| Language | Value |
| --- | --- |
| English | `Comments` |
| French | `Commentaires` |
| Indonesian | `Komentar` |
| Portuguese | `Comentários` |
| Spanish | `Comentarios` |
| Vietnamese | `Nhận xét` |


## .configurationRequired

Gadget type: `Global`

**Usage**

```html
<data:messages.configurationRequired/>
```

```html
<b:eval expr='data:messages.configurationRequired'/>
```

```html
<b:message name='messages.configurationRequired'/>
```

**Values**

| Language | Value |
| --- | --- |
| English | `Configuration required` |
| French | `Configuration obligatoire` |
| Indonesian | `Konfigurasi yang diperlukan` |
| Portuguese | `Configuração necessária` |
| Spanish | `Necesita configuración` |
| Vietnamese | `Đã yêu cầu cấu hình` |


## .copy

Gadget type: `Global`

**Usage**

```html
<data:messages.copy/>
```

```html
<b:eval expr='data:messages.copy'/>
```

```html
<b:message name='messages.copy'/>
```

**Values**

| Language | Value |
| --- | --- |
| English | `Copy` |
| French | `Copier` |
| Indonesian | `Salin` |
| Portuguese | `Copiar` |
| Spanish | `Copiar` |
| Vietnamese | `Sao chép` |
