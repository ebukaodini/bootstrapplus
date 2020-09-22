
# bootstrap-plus
A bootstrap extension.

[![Netlify Status](https://api.netlify.com/api/v1/badges/a5e3311c-926f-48f3-85a6-465b374859ac/deploy-status)](https://app.netlify.com/sites/bootstrap-plus/deploys)

<!-- Visuals -->

## Getting Started 🚀
### CDN
Just include the source script in your HTML code
```html
<script src="https://bootstrap-plus.netlify.app/lib/bootstrapplus.js"></script>
```

### NPM
Install the npm package
```git
> npm i @~melki/bootstrap-plus
```
Import the package in your App.js
```jsx
import bsp from '@~melki/bootstrap-plus';
```


## Usage
### Alias
Alias allows you to wrap all your bootstrap classNames in your one single className. #DRY

## Example
```javascript
window.onload = function() {
   bootstrapplus.alias({
      "navlink-btns": "btn btn-sm btn-primary rounded-0"
   });
}
```

```html
<button class="navlink-btns">Nav Button 1</button>
<button class="navlink-btns">Nav Button 2</button>
<button class="navlink-btns">Nav Button 3</button>
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