$(document).ready(function() {
  var isAnimating = false;

  $('.slide-nav').on('click', function(e) {
      e.preventDefault();
      if (isAnimating) return;

      var current = $('.flex--active').data('slide'),
          next = $(this).data('slide');

      if (current === next) {
          return false;
      } else {
          isAnimating = true;
          $('.slide-nav').removeClass('active');
          $(this).addClass('active');
          $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
          $('.flex--active').addClass('animate--end');
          setTimeout(function() {
              $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
              $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
              isAnimating = false;
          }, 800);
      }
  });

  $(document).keydown(function(e) {
      if (isAnimating) return;
      if (e.keyCode === 38) {
          e.preventDefault();
          var currentSlideIndex = $('.slide-nav.active').index();
          var prevSlideIndex = currentSlideIndex === 0 ? $('.slide-nav').length - 1 : currentSlideIndex - 1;
          $('.slide-nav').eq(prevSlideIndex).click();
      } else if (e.keyCode === 40) {
          e.preventDefault();
          var currentSlideIndex = $('.slide-nav.active').index();
          var nextSlideIndex = currentSlideIndex === ($('.slide-nav').length - 1) ? 0 : currentSlideIndex + 1;
          $('.slide-nav').eq(nextSlideIndex).click();
      }
  });
});
