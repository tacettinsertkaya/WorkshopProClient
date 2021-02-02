$(document).ready(function () {
  $(document).on('click', '#toggleSidebar', function () {
    $('.sidebar').toggleClass('active');
  });
  $(document).on('click', '#hideSidebar', function () {
    $('.sidebar').removeClass('active');
  });
})
