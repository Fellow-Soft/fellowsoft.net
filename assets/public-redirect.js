const link = document.querySelector('[data-public-redirect]');
if (link) {
  const target = new URL(link.getAttribute('href'), window.location.origin);
  target.search = window.location.search;
  target.hash = window.location.hash;
  window.location.replace(target.toString());
}