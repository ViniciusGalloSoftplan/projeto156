(function () {
  var bar = document.getElementById('sic-bar');
  if (!bar || !btn) return;
  if (sessionStorage.getItem('sic_bar_dismissed')) bar.classList.add('hide');
  btn.addEventListener('click', function () {
    bar.classList.add('hide');
    sessionStorage.setItem('sic_bar_dismissed', '1');
  });
})();
