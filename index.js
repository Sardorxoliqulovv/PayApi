let decriment = 0;
function setimeout() {
  setTimeout(function() {
    console.log('tartib ' + decriment++)
    setimeout();
  }, 2000);
}
setimeout();