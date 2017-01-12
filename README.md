# add_active_link

## jQuery snippet for Rails projects that parses the url for the current page, and adds an 'active' class decoration to links that match the current page.

### add_active_link has jquery as a dependency.

## Default configuration

By default this snippet is designed to work with Twitter Bootstrap v4 header navigation. However, you can target different elements in your page(s) by modifying the active_element variable. In the default it is targetting links within a line item within a header element with a class of navbar-nav.

```
var active_elements = $("header .navbar-nav li a");
```

To use in the context of a Rails app with TurboLinks use the following snippet.
```
$(document).on('turbolinks:load', function() {
  var active_elements = $("header .navbar-nav li a");
  setActiveLink(active_elements);
});
```
Add this snippet to the app/assets/javascript/application.js file. Make sure that the add_active_link.js file is in your loadpath
You can modify the active_elements variable if you want to point at different links.

In a non-TurboLinks environment, you can invoke the method using this form in your application.js file. 
```
$(function() {
  var active_elements = $("header .navbar-nav li a");
  setActiveLink(active_elements);
});
```
