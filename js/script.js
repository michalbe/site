window.onload = function() {
  var buttons = document.getElementsByTagName('button');

  var listener = function(e) {
    var site = e.target.dataset.site;
    document.body.className = site + '-screen';
  }

  for (var i=0, l=buttons.length; i<l; i++) {
    buttons[i].addEventListener('click', listener);
  }
}
