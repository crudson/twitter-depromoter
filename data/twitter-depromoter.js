self.port.on('findAndStrip', function() {
  var els = document.querySelectorAll('div[data-disclosure-type="promoted"]');
  for (var i = 0; i < els.length; i++) {
    var el = els.item(i);
    var parent = el;
    while (parent !== null) {
      if (parent.getAttribute('data-item-type') === 'tweet') {
        parent.parentElement.removeChild(parent);
        break;
      }
      parent = parent.parentElement;
    }
  }
});
