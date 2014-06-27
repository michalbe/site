window.onload = function() {
  var buttons = document.getElementsByTagName('button');

  var listener = function(e) {
    var site = e.target.dataset.site;
    document.body.className = site + '-screen';
  }

  for (var i=0, l=buttons.length; i<l; i++) {
    buttons[i].addEventListener('click', listener);
  }

  // shuffle speakers
  var speakers = document.querySelectorAll('#speakers-page img');

  for (i=0, l=speakers.length; i<l; i++) {
    speakers[i].style.transform =
      "translateX(" + ~~(30 - Math.random()*60) +
      "px) translateY(" + ~~(Math.random()*300) + "px)";
  }

}
