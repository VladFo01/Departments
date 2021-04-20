$(document).ready(function () {
  
  const stickyBlockHeight = $('.page-nav').outerHeight() + $(".choose").outerHeight();

  $('.page-nav-link').click(function (event) {

    const linkHref = $(this).attr('href');
    event.preventDefault();
    $('html').animate({
      scrollTop: $(linkHref).offset().top - stickyBlockHeight
    }, 1000);
  });

  let navLink = $('.page-nav-link');
  navLink.click(function (event) {
     event.preventDefault();
     $('.page-nav-link-active').toggleClass('page-nav-link-active');
     $(this).toggleClass('page-nav-link-active');
  });
});