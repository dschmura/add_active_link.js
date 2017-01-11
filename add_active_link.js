$(document).on('turbolinks:load', function() {
  setActiveLink();
});

function setActiveLink() {
  var path = window.location.pathname;
  path = path.replace(/\/$/, "");
  path = decodeURIComponent(path);
  var active_element = $("header .navbar-nav li a");
  active_element.each(function() {
    var href = $(this).attr('href');
    if (path.substring(0, href.length) === href) {
        $(this).closest('a').addClass('active');
    }
  });
}
