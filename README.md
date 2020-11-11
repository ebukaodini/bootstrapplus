
# bootstrap-plus
A bootstrap extension.

[![Netlify Status](https://api.netlify.com/api/v1/badges/a5e3311c-926f-48f3-85a6-465b374859ac/deploy-status)](https://app.netlify.com/sites/bootstrapplus/deploys)

## Getting Started 🚀
### CDN
Just include the source script in your HTML code
```html
<script src="https://cdn.jsdelivr.net/gh/ebukaodini/bootstrapplus@1.0.0/bootstrapplus.min.js"></script>
```

### Download
Download the [Compressed File](https://bootstrapplus.netlify.app/dist.zip).

## Usage
### Alias
Alias allows you to wrap all your bootstrap classNames in your one single className. #DRY
```javascript
window.onload = function() {
   bootstrapplus.alias({
      "common-name": "name1 name2 name3 name4 ..."
   });
}
```

## Example
```javascript
window.onload = function() {
   bootstrapplus.alias({
      "mybtns": "btn btn-sm btn-primary rounded-0"
   });
}
```

```html
<button class="mybtns">Button 1</button>
<button class="mybtns">Button 2</button>
<button class="mybtns">Button 3</button>
```

### Swatch
Define your own colour swatch for primary, secondary, success, info, warning, danger.
```javascript
// Defaults
window.onload = function() {
   bootstrapplus.swatch({
      "primary": "#007bff",
      "secondary": "#6c757d",
      "success": "#28a745",
      "info": "#17a2b8",
      "warning": "#ffc107",
      "danger": "#dc3545"
   });
}
```

## Example
```javascript
// Changing the primary and secondary swatch
window.onload = function() {
   bootstrapplus.swatch({
      "primary": "#7e3c06",
      "secondary": "#c48b59"
   });
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change

## Roadmap
Our next release would be featuring themes. 🤞

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Homepage

[Homepage](https://bootstrapplus.netlify.app)