const bootstrapplus = {
   extend: function(alts = {}) {
      for (const key in alts) {
         if (alts.hasOwnProperty(key)) {
            let alt = alts[key];
            document.querySelectorAll(`.${key}`).forEach(element => {
               element.className = element.className.toString().replace(key, alt);;
            });
         }
      }
   }
}