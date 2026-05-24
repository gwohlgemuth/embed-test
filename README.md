# embeds

GitHub repo serving JS widgets as embeddable web components via jsDelivr CDN.

## Embed via Script Tag

```html
<script src="https://cdn.jsdelivr.net/gh/gwohlgemuth/embeds/dist/<widget>.js"></script>
<fourier-widget></fourier-widget>
```

## Embed via iFrame

```html
<iframe src="https://cdn.jsdelivr.net/gh/gwohlgemuth/embeds/doc/<widget>.html"></iframe>
```

## Available Widgets

| Widget | Script | iFrame |
|--------|--------|--------|
| `fourier-widget` | `dist/fourier-widget.js` | `doc/fourier-widget.html` |

## CDN URL Pattern

```
https://cdn.jsdelivr.net/gh/gwohlgemuth/embeds@<tag>/dist/<widget>.js
https://cdn.jsdelivr.net/gh/gwohlgemuth/embeds@<tag>/doc/<widget>.html
```

Use a version tag to bust jsDelivr cache:

```bash
git tag v1.0.0
git push --tags
```

## Deploy

```bash
git add dist/ doc/
git commit -m "build: <widget> v1.0.0"
git tag v1.0.0
git push && git push --tags
```
