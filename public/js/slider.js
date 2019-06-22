$( document ).ready(function(){
  $( '.trending-coaches, .trending-players, .trending-teams' ).slick({
    autoplay: true,
    dots: false,
    draggable: true,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: -1
  });
});
