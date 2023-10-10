// 마우스 커서 움직이기
const cursor = $('.cursor');
const follower = $('.cursor');

$(window).mousemove(function (event) {
  $('.cursor').css({ opacity: '1', left: event.clientX - 25, top: event.clientY - 25 });
  // gsap.to(cursor, { left: '' });

  $('.image-box__content p').hover(
    function () {
      $('.cursor').addClass('active');
      $('.cursor .text').text('');
    },
    function () {
      $('.cursor').removeClass('active');
      $('.cursor .text').text('Here we go!');
    }
  );
});