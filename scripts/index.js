
$( document ).ready(function(){
  $(".button-collapse").sideNav();
});

$(document).ready(function(){
     $('.parallax').parallax();
   });

   var options = [
       {selector: '#staggered-test', offset: 50, callback: 'Materialize.toast("This is our ScrollFire Demo!", 1500 )' },
       {selector: '#staggered-test', offset: 205, callback: 'Materialize.toast("Please continue scrolling!", 1500 )' },
       {selector: '#staggered-test', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
       {selector: '#image-test', offset: 500, callback: 'Materialize.fadeInImage("#image-test")' }
     ];
     Materialize.scrollFire(options);

$( document ).ready(function(){
$('.fixed-action-btn').openFAB();
});

$( document ).ready(function(){
  $('.fixed-action-btn').closeFAB();
});
