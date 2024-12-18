
      let languageContent = {
         "tr": {
            "text1": "Anasayfa",
            "service": "Hizmetler",
            "BrandName": "Hakkımızda",
            "Gallery": "Galeri",
            "project": "Projeler",
            "feature": "Özellikler",
            "Get A Quote": "Teklif Al",
            "Get A Quote1": "Teklif Al",
         },
         "en": {
            "text1": "Home",
            "service": "Service",
            "BrandName": "About",
            "Gallery": "Pages",
            "project": "Project",
            "feature": "Feature",
            "Get A Quote": "Get A Quote",
            "Get A Quote1": "Get A Quote",
         },
        
      }
      function swithcLang(lang) {
         for (let key in languageContent[lang]) {
            document.getElementById(key).innerHTML = languageContent[lang][key];
         }
      }
 
