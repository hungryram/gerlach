// $(document).ready(function(){
//     $('.hero-carousel').slick({
//         autoplay: true,
//         autoplaySpeed: 2000,
//     })
//   });

$(document).ready(function () {
    $('.hero-content').delay(500).fadeIn(2000);
    $('#header').hide().delay(500).slideDown(500);

    // NAVBAR
    $('.nav-mobile').click(function(){
        $('nav').toggleClass('open');
      });
});