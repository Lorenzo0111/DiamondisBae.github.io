var getMenuPosition = function() {
    return $('.scroll').scrollLeft();
};
  

$('#right').on('click', function() {
    $('.scroll').animate({
       scrollLeft: getMenuPosition() + 100
       }, 500);
});
  
$('#left').on('click', function() {
 $('.scroll').animate({
    scrollLeft: getMenuPosition() - 100
    }, 500);
});

setInterval(() => {
  $('.scroll').animate({
     scrollLeft: getMenuPosition() + 100
     }, 300);
}, 1000);

var speed = 30;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

window.onload = function() {
  incEltNbr("clients");
  incEltNbr("views");
  incEltNbr("channels");
}