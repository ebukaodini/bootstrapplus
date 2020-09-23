'use strict';

const bootstrapplus = {
   alias: function(aliases = {}) {
      for (const key in aliases) {
         if (aliases.hasOwnProperty(key)) {
            let alt = aliases[key];
            document.querySelectorAll(`.${key}`).forEach(element => {
               element.className = element.className.toString().replace(key, alt);
            });
         }
      }
   },

   swatch: function(swatches = {}) {
      for (const key in swatches) {
         if (swatches.hasOwnProperty(key)) {
            let hsl = this.toHSL(swatches[key]);
            switch (key) {
               case 'primary':
               case 'secondary':
               case 'success':
               case 'info':
               case 'warning':
               case 'danger':
                  this.applySwatch(key, hsl);
                  break;
            
               default:
                  break;
            }
         }
      }
   },

   applySwatch: function(swatch, hsl) {
      let {h, s, l} = hsl;
      const style = `
         /* Tables */

         .table-${swatch},
         .table-${swatch} > th,
         .table-${swatch} > td {
         background-color: hsl(${h}, ${s}%, ${l+36}%)
         }

         .table-${swatch} th,
         .table-${swatch} td,
         .table-${swatch} thead th,
         .table-${swatch} tbody + tbody {
         border-color: hsl(${h}, ${s}%, ${l+24}%)
         }

         .table-hover .table-${swatch}:hover {
         background-color: hsl(${h}, ${s}%, ${l+21}%)
         }

         .table-hover .table-${swatch}:hover > td,
         .table-hover .table-${swatch}:hover > th {
         background-color: hsl(${h}, ${s}%, ${l+21}%)
         }

         /* Buttons */

         .btn-${swatch} {
         color: #ffffff;
         background-color: hsl(${h}, ${s}%, ${l}%);
         border-color: hsl(${h}, ${s}%, ${l}%);
         }
         
         .btn-${swatch}:hover {
         color: #ffffff;
         background-color: hsl(${h}, ${s}%, ${l-7}%);
         border-color: hsl(${h}, ${s}%, ${l-10}%);
         }
         
         .btn-${swatch}:focus, .btn-${swatch}.focus {
         color: #ffffff;
         background-color: hsl(${h}, ${s}%, ${l-7}%);
         border-color: hsl(${h}, ${s}%, ${l-10}%);
         box-shadow: 0 0 0 0.2rem hsla(${h}, ${s}%, ${l+7}%, 0.5);
         }
         
         .btn-${swatch}.disabled, .btn-${swatch}:disabled {
         color: #ffffff;
         background-color: hsl(${h}, ${s}%, ${l}%);
         border-color: hsl(${h}, ${s}%, ${l}%);
         }
         
         .btn-${swatch}:not(:disabled):not(.disabled):active, .btn-${swatch}:not(:disabled):not(.disabled).active,
         .show > .btn-${swatch}.dropdown-toggle {
         color: #ffffff;
         background-color: hsl(${h}, ${s}%, ${l-10}%);
         border-color: hsl(${h}, ${s}%, ${37}%);
         }
         
         .btn-${swatch}:not(:disabled):not(.disabled):active:focus, .btn-${swatch}:not(:disabled):not(.disabled).active:focus,
         .show > .btn-${swatch}.dropdown-toggle:focus {
         box-shadow: 0 0 0 0.2rem hsla(${h}, ${s}%, ${l+7}%, 0.5);
         }

         /* Outline Buttons */

         .btn-outline-${swatch} {
         color: hsl(${h}, ${s}%, ${l}%);
         border-color: hsl(${h}, ${s}%, ${l}%);
         }

         .btn-outline-${swatch}:hover {
         color: #ffffff;
         background-color: hsl(${h}, ${s}%, ${l}%);
         border-color: hsl(${h}, ${s}%, ${l}%);
         }

         .btn-outline-${swatch}:focus, .btn-outline-${swatch}.focus {
         box-shadow: 0 0 0 0.2rem hsla(${h}, ${s}%, ${l}%, 0.5);
         }

         .btn-outline-${swatch}.disabled, .btn-outline-${swatch}:disabled {
         color: hsl(${h}, ${s}%, ${l}%);
         background-color: transparent;
         }

         .btn-outline-${swatch}:not(:disabled):not(.disabled):active, .btn-outline-${swatch}:not(:disabled):not(.disabled).active,
         .show > .btn-outline-${swatch}.dropdown-toggle {
         color: #ffffff;
         background-color: hsl(${h}, ${s}%, ${l}%);
         border-color: hsl(${h}, ${s}%, ${l}%);
         }

         .btn-outline-${swatch}:not(:disabled):not(.disabled):active:focus, .btn-outline-${swatch}:not(:disabled):not(.disabled).active:focus,
         .show > .btn-outline-${swatch}.dropdown-toggle:focus {
         box-shadow: 0 0 0 0.2rem hsla(${h}, ${s}%, ${l}%, 0.5);
         }


         /* Buttons Hover - Focus */

         a.bg-${swatch}:hover, a.bg-${swatch}:focus,
         button.bg-${swatch}:hover,
         button.bg-${swatch}:focus {
         background-color: hsl(${h}, ${s}%, ${l-10}%) !important;
         }


         /* Background */
         .bg-${swatch} {
         background-color: hsl(${h}, ${s}%, ${l}%) !important;
         }
         
         a.bg-${swatch}:hover, a.bg-${swatch}:focus,
         button.bg-${swatch}:hover,
         button.bg-${swatch}:focus {
         background-color: hsl(${h}, ${s}%, ${l-10}%) !important;
         }
            

         /* Badges */

         .badge-${swatch} {
         color: #ffffff;
         background-color: hsl(${h}, ${s}%, ${l}%);
         }

         a.badge-${swatch}:hover, a.badge-${swatch}:focus {
         color: #ffffff;
         background-color: hsl(${h}, ${s}%, ${l-10}%);
         }

         a.badge-${swatch}:focus, a.badge-${swatch}.focus {
         outline: 0;
         box-shadow: 0 0 0 0.2rem hsla(${h}, ${s}%, ${l}%, 0.5);
         }


         /* Alert */

         .alert-${swatch} {
         color: hsl(${h}, ${s}%, ${l-24}%);
         background-color: hsl(${h}, ${s}%, ${l+40}%);
         border-color: hsl(${h}, ${s}%, ${l+36}%)
         }

         .alert-${swatch} hr {
         border-top-color: hsl(${h}, ${s}%, ${l+31}%)
         }

         .alert-${swatch} .alert-link {
         color: hsl(${h}, ${s}%, ${l-34}%);
         }


         /* List Groups */

         .list-group-item-${swatch} {
         color: hsl(${h}, ${s}%, ${l-24}%);
         background-color: hsl(${h}, ${s}%, ${l+36}%)
         }

         .list-group-item-${swatch}.list-group-item-action:hover, .list-group-item-${swatch}.list-group-item-action:focus {
         color: hsl(${h}, ${s}%, ${l-24}%);
         background-color: hsl(${h}, ${s}%, ${l+31}%)
         }

         .list-group-item-${swatch}.list-group-item-action.active {
         color: #ffffff;
         background-color: hsl(${h}, ${s}%, ${l-24}%);
         border-color: hsl(${h}, ${s}%, ${l-24}%);
         }

         /* Border */

         .border-${swatch} {
         border-color: hsl(${h}, ${s}%, ${l}%) !important;
         }
         
         
         /* Texts */
         
         .text-${swatch} {
         color: hsl(${h}, ${s}%, ${l}%) !important;
         }
         
         a.text-${swatch}:hover, a.text-${swatch}:focus {
         color: hsl(${h}, ${s}%, ${l-15}%) !important;
         }
         
         
         /* Link Texts */
         
         a.text-${swatch}:hover, a.text-${swatch}:focus {
         color: hsl(${h}, ${s}%, ${l-15}%) !important;
         }
         
      `;
      let elems = document.getElementById(`${swatch}-swatch`);
      if (elems == null) {
         let elem = document.createElement('style');
         let id = document.createAttribute('id');
         id.value = `${swatch}-swatch`;
         const content = document.createTextNode(style);
         elem.setAttributeNode(id); elem.appendChild(content);
         document.head.insertAdjacentElement("beforeend", elem);
      } else {
         elems.innerHTML = style;
      }
   },

   toHSL: function(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  
      var r = parseInt(result[1], 16);
      var g = parseInt(result[2], 16);
      var b = parseInt(result[3], 16);
  
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
  
      if(max == min){
         h = s = 0; // achromatic
      } else {
         var d = max - min;
         s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
         switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
         }
         h /= 6;
      }
  
      s = s*100;
      s = Math.round(s);
      l = l*100;
      l = Math.round(l);
      h = Math.round(360*h);

      return {h, s, l};
   }
}
