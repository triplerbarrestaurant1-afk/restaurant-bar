// Loads /_data/content.json and applies editable content to the page
(function () {
  fetch('/_data/content.json')
    .then(function (r) { return r.json(); })
    .then(function (c) {
      var lang = document.documentElement.lang === 'fr' ? 'fr' : 'en';

      // Phone links
      document.querySelectorAll('[data-content="phone"]').forEach(function (el) {
        el.textContent = c.phone;
        if (el.tagName === 'A') el.href = 'tel:' + c.phone.replace(/\s/g, '');
      });

      // Address
      document.querySelectorAll('[data-content="address"]').forEach(function (el) {
        el.innerHTML = lang === 'fr' ? c.address_fr : c.address_en;
      });

      // Hours
      document.querySelectorAll('[data-content="hours"]').forEach(function (el) {
        el.innerHTML = lang === 'fr' ? c.hours_fr : c.hours_en;
      });

      // Revolut link
      document.querySelectorAll('[data-content="revolut"]').forEach(function (el) {
        el.href = c.revolut_link;
      });

      // Announcement banner (only shows if non-empty)
      if (c.announcement) {
        var banner = document.getElementById('cms-announcement');
        if (banner) {
          banner.textContent = c.announcement;
          banner.style.display = 'block';
        }
      }
    })
    .catch(function () { /* silently skip if file not found locally */ });
})();
